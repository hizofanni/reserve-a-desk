export interface Office {
    id? : String,
    address:  String,
    desks: Number[],
    body: String,
    meeting_room: [{ name: String, capacity: Number }],
    accesibility: Boolean,
    beverage: Boolean
}
