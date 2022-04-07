import firestore from "../firebase";

const db = firestore.collection("/tutorials");

class DataService {
  getAll() {
    return db;
  }
  create(tutorial) {
    return db.add(tutorial);
  }
  update(id, value) {
    return db.doc(id).update(value);
  }
  delete(id) {
    return db.doc(id).delete();
  }
}

export default new DataService();