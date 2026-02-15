import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

function Admin() {
  const [shirts, setShirts] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  // ⭐ NEW STATES
  const [size, setSize] = useState([]); // checkbox multiple values
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchShirts();
  }, []);

  // ---------- FETCH PRODUCTS ----------
  const fetchShirts = async () => {
    const snap = await getDocs(collection(db, "shirts"));
    setShirts(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // ---------- CLOUDINARY UPLOAD ----------
  const uploadImage = async () => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "shirtstore_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvg0d9p6o/image/upload",
      { method: "POST", body: formData }
    );

    const data = await res.json();
    return data.secure_url;
  };

  // ---------- ADD OR UPDATE ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    let imageUrl = null;
    if (file) imageUrl = await uploadImage();

    try {
      if (editingId) {
        // UPDATE
        const ref = doc(db, "shirts", editingId);

        await updateDoc(ref, {
          name,
          description,
          price,
          size,
          category,
          ...(imageUrl && { image: imageUrl }),
        });
      } else {
        // CREATE
        await addDoc(collection(db, "shirts"), {
          name,
          description,
          price,
          image: imageUrl,
          size,
          category,
          createdAt: new Date(),
        });
      }

      resetForm();
      fetchShirts();
    } catch (err) {
      console.log(err);
      alert("Error saving product");
    }

    setLoading(false);
  };

  // ---------- DELETE ----------
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await deleteDoc(doc(db, "shirts", id));
    fetchShirts();
  };

  // ---------- EDIT ----------
  const handleEdit = (shirt) => {
    setEditingId(shirt.id);
    setName(shirt.name);
    setDescription(shirt.description);
    setPrice(shirt.price);
    setSize(shirt.size || []);
    setCategory(shirt.category || "");
  };

  // ---------- RESET ----------
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setDescription("");
    setPrice("");
    setFile(null);
    setSize([]);
    setCategory("");
  };

  // ---------- ANALYTICS ----------
  const totalProducts = shirts.length;
  const totalValue = shirts.reduce(
    (sum, s) => sum + Number(s.price || 0),
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* DASHBOARD */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded">
          Total Products: {totalProducts}
        </div>

        <div className="bg-white shadow p-4 rounded">
          Total Value: ₹{totalValue}
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white shadow-xl p-6 rounded-xl mb-8">
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit Product" : "Add Product"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded"
          />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-3 rounded"
          />

          {/* PRICE */}
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-3 rounded"
          />

          {/* IMAGE */}
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {/* SIZE CHECKBOX */}
          <div>
            <p className="font-semibold mb-2">Select Sizes</p>

            <div className="flex gap-4">
              {["S", "M", "L", "XL", "XXL"].map((s) => (
                <label key={s} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={size.includes(s)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSize([...size, s]);
                      } else {
                        setSize(size.filter((item) => item !== s));
                      }
                    }}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-3 rounded"
          >
            <option value="">Select Category</option>
            <option>First copy</option>
            <option>Master copy</option>
            <option>Player version</option>
            <option>Retro</option>
            <option>Fan version</option>
            <option>Special Set</option>
            <option>Kids Set</option>
            <option>Other</option>
          </select>

          {/* BUTTON */}
          <button className="w-full bg-black text-white py-3 rounded">
            {loading ? "Saving..." : editingId ? "Update" : "Upload"}
          </button>

        </form>
      </div>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shirts.map((shirt) => (
          <div key={shirt.id} className="bg-white shadow rounded-xl p-4">

            {shirt.image && (
              <img
                src={shirt.image}
                alt={shirt.name}
                className="w-full h-48 object-cover rounded"
              />
            )}

            <h3 className="font-bold mt-2">{shirt.name}</h3>
            <p className="text-gray-500">{shirt.description}</p>

            {shirt.size && (
              <p className="text-sm text-gray-600">
                Sizes: {shirt.size.join(", ")}
              </p>
            )}

            {shirt.category && (
              <p className="text-sm text-blue-500">
                {shirt.category}
              </p>
            )}

            <p className="font-bold text-green-600">₹{shirt.price}</p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(shirt)}
                className="flex-1 bg-blue-500 text-white py-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(shirt.id)}
                className="flex-1 bg-red-500 text-white py-2 rounded"
              >
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Admin;
