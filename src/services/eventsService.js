import EventEmitter from "events"; 

class EventsService extends EventEmitter {
    constructor (eventsRepository) {
        super(); 
        this.eventsRepository = eventsRepository; 
    }

    async recordEvent(eventData) {

        try {
            const event = await this.eventsRepository.recordEvent(eventData); 

            this.emit("eventRecorded", event); 
        } 
        
        catch (error) {
            console.error('Error in EventsService recording event:', error.message);
            throw error;
        }

    }


}

export default EventsService; 