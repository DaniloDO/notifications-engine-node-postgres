
class EventsRepository {
    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

    async recordEvent(eventData) {
        const { eventType, entityType, entityId, actorId } = eventData;

        try {
            const query = `
                INSERT INTO events (event_type, entity_type, entity_id, actor_id)
                VALUES($1, $2, $3, $4)
                RETURNING *; 
                `;
            const values = [eventType, entityType, entityId, actorId];

            const { rows } = await this.postgresClient.pool.query(query, values);
            return rows[0];
        }

        catch (error) {
            console.error("Error in EventsRepository recording event:", error.message); 
            throw error; 
        }


    }

    async getEventById(postId) {

    }

    async updateEvent(postId, postData) {

    }

    async deleteEvent(postId) {

    }

}

export default EventsRepository; 