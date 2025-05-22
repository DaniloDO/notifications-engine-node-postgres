CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE, 
    user_password VARCHAR (255) NOT NULL,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY, 
    title TEXT NOT NULL, 
    content TEXT, 
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER,
    CONSTRAINT fk_posts_users
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    
); 

CREATE TABLE IF NOT EXISTS comments(
    id SERIAL PRIMARY KEY, 
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INTEGER,
    CONSTRAINT fk_comments_users
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER,
    CONSTRAINT fk_comments_posts
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
); 

CREATE TABLE IF NOT EXISTS events(
    id SERIAL PRIMARY KEY, 
    event_type VARCHAR(50),
    entity_type VARCHAR(50),
    entity_id INTEGER NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actor_id INTEGER, 
    CONSTRAINT fk_events_users
        FOREIGN KEY (actor_id) REFERENCES users(id) ON DELETE SET NULL
); 

CREATE TABLE IF NOT EXISTS notifications(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    event_id INTEGER, 
    CONSTRAINT fk_notifications_events
        FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_notifications(
    id SERIAL PRIMARY KEY,
    is_sent BOOLEAN DEFAULT FALSE,
    is_read BOOLEAN DEFAULT FALSE,
    notifier_id INTEGER, 
    notifications_id INTEGER,
    CONSTRAINT fk_user_notifications_users
        FOREIGN KEY (notifier_id) REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT fk_user_notifications_notifications 
        FOREIGN KEY (notifications_id) REFERENCES notifications (id) ON DELETE CASCADE
); 