from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app)

# In-memory FAQ store (you can replace this with a database)
faqs = []

# GET /faqs - Fetch all FAQs
@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

# GET /faqs/:id - Fetch a single FAQ by ID
@app.route('/faqs/<string:faq_id>', methods=['GET'])
def get_faq(faq_id):
    faq = next((f for f in faqs if f['id'] == faq_id), None)
    if faq is None:
        return jsonify({'error': 'FAQ not found'}), 404
    return jsonify(faq)

# POST /faqs - Create a new FAQ
@app.route('/faqs', methods=['POST'])
def create_faq():
    data = request.json
    faq = {
        'id': str(uuid.uuid4()),  # generate unique ID
        'question': data['question'],
        'answer': data['answer'],
    }
    faqs.append(faq)
    return jsonify(faq), 201

# PUT /faqs/:id - Update a FAQ by ID
@app.route('/faqs/<string:faq_id>', methods=['PUT'])
def update_faq(faq_id):
    data = request.json
    faq = next((f for f in faqs if f['id'] == faq_id), None)
    if faq is None:
        return jsonify({'error': 'FAQ not found'}), 404
    faq['question'] = data.get('question', faq['question'])
    faq['answer'] = data.get('answer', faq['answer'])
    return jsonify(faq)

# DELETE /faqs/:id - Delete a FAQ by ID
@app.route('/faqs/<string:faq_id>', methods=['DELETE'])
def delete_faq(faq_id):
    global faqs
    faqs = [f for f in faqs if f['id'] != faq_id]
    return jsonify({'message': 'FAQ deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
