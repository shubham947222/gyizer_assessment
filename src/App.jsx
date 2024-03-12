import { useState } from "react";
import "./App.css";

import "./styles/theme/theme.scss";
import "./styles/theme/theme_variable.scss";
import "./styles/css/global.css";

import Header from "./Components/Header";
import Input from "./Components/Input";

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showMenuIndex, setShowMenuIndex] = useState(null);

  const handleAddItem = () => {
    if (title.trim() !== "" && desc.trim() !== "") {
      if (editMode) {
        const newItems = [...items];
        newItems[editIndex] = { title, desc };
        setItems(newItems);
        setEditMode(false);
        setTitle("");
        setDesc("");
        setEditIndex(null);
      } else {
        setItems([...items, { title, desc }]);
        setTitle("");
        setDesc("");
      }
    }
  };

  const handleEditItem = (index) => {
    setTitle(items[index].title);
    setDesc(items[index].desc);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteItem = () => {
    const newItems = items.filter((item, i) => i !== deleteIndex);
    setItems(newItems);
    setShowDeleteModal(false);
  };

  const handleDeleteButtonClick = (index) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const toggleMenu = (index) => {
    setShowMenuIndex(showMenuIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-100">
        <Header />
        <div className="input-area my-5">
          <div className="w-100 d-flex ">
            <div className="d-flex w-100 flex-column">
              <input
                type="text"
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-1 text-white m-1 th-16 th-br-4"
                style={{
                  flex: 1,
                  border: "1px solid #FF8303",
                  background: "#242320",
                }}
              />
              <textarea
                id="textArea"
                name="textArea"
                placeholder="Description..."
                rows="1"
                cols="50"
                value={desc}
                className="p-1 text-white m-1 th-16 th-br-4"
                onChange={(e) => setDesc(e.target.value)}
                style={{
                  flex: 1,
                  border: "1px solid #FF8303",
                  background: "#242320",
                }}
              />
            </div>
            <button
              className="primary-border"
              onClick={handleAddItem}
              style={{
                padding: "6px 20px ",
                fontSize: "16px",
                backgroundColor: "transparent",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {editMode ? "Update" : "+"}
            </button>
          </div>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-center">
          <div
            className=" row primary-border"
            style={{
              width: "80%",
              minHeight: "calc(100vh - 420px)",
              background: "#242320",
              // border: "5px solid red",
            }}
          >
            {items?.map((item, index) => (
              <div
                className="item col-md-3 col-10 m-1 p-1 h-25 "
                key={index}
                style={{
                  backgroundColor: "#242320",
                  borderRadius: "5px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="item-details">
                  <div className="d-flex justify-content-between align-items-center">
                    <h2 style={{ color: "#fff" }}>{item.title}</h2>
                    <div className="d-flex gap-2">
                      {showMenuIndex === index && (
                        <div className=" ">
                          <button
                            className="primary-border th-br-5"
                            onClick={() => handleEditItem(index)}
                            style={{
                              padding: "4px 10px ",
                              fontSize: "16px",
                              backgroundColor: "transparent",
                              color: "#fff",
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-pen"></i>{" "}
                          </button>
                          <button
                            className="primary-border th-br-5 mx-1"
                            onClick={() => handleDeleteButtonClick(index)}
                            style={{
                              padding: "4px 10px ",
                              fontSize: "16px",
                              backgroundColor: "transparent",
                              color: "#fff",
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-trash-alt"></i>{" "}
                          </button>
                        </div>
                      )}
                      <div
                        className="kabab-menu th-pointer"
                        onClick={() => toggleMenu(index)}
                        style={{
                          cursor: "pointer",
                          fontSize: "20px",
                          color: "#fff",
                        }}
                      >
                        &#8942;
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "#fff" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {showDeleteModal && (
            <div className="modal-overlay">
              <div
                className="modal-content w-25"
                style={{
                  padding: "20px",
                  borderRadius: "5px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                <p className="text-white">Delete this tast </p>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    className="th-br-5"
                    onClick={handleDeleteItem}
                    style={{
                      padding: "2px 16px ",
                      fontSize: "16px",
                      backgroundColor: "transparent",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className=" th-br-5 "
                    onClick={() => setShowDeleteModal(false)}
                    style={{
                      padding: "2px 16px ",
                      fontSize: "16px",
                      backgroundColor: "transparent",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
