
import dotenv from "dotenv";
import pg from "pg";

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = dirname(__filename); 

const environment = process.env.NODE_ENV || "development"; 
dotenv.config({path: `${environment}.env`}); 

const { Pool } = pg; 

class PostgresClient {
    constructor() {

        if(!PostgresClient.instance) {
            this.pool = new Pool({
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                host: process.env.POSTGRES_HOST,
                port: process.env.POSTGRES_PORT,
                database: process.env.POSTGRES_DATABASE,
            });

            PostgresClient.instance = this; 
        }

        this._connect();
        this.loadSchema(); 
        return PostgresClient.instance;  
    }

    async _connect() {
        try {
            const response = await this.pool.query("SELECT NOW();");
            console.log(`PostgreSQL connected: ${response.rows[0].now}`); 
        } 
        
        catch (error) {
            console.error("Postgres connection failed:", error.message);
            process.exit(1);
        }
    }

    async loadSchema() {
        try {
            const schemaPath = join(__dirname, "../schemas/schemas.sql"); 
            const schemaSQL = readFileSync(schemaPath, "utf-8"); 
            await this.pool.query(schemaSQL); 
            console.log('Database schema loaded successfully'); 
        } 
        
        catch (error) {
            console.error('Error loading database schema:', error.message);
            throw error;
        }
    }

    async closeConnection() {
        this.pool.end(() => {
            console.log("PostgreSQL pool closed"); 
        }); 
    }

}

const postgresClient = new PostgresClient(); 
Object.freeze(postgresClient); 

export default postgresClient; 