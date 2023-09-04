import React, { useState } from "react";

function ModalForm({ modalActive, setModalActive }) {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu base de datos
    console.log(formData);
  };
  const handleActivateModal = () => {
    setModalActive(!modalActive);
  };

  // ...
  // ...
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-10 overflow-hidden">
        <div className="bg-white px-8 rounded-3xl shadow-lg relative desktop:w-[30%] max-h-[530px] overflow-y-auto overflow-x-hidden mb-3">
          <div className="sticky top-0 flex justify-between items-center bg-slate-200 shadow-md p-2 midDesktop:w-[120%] -mx-8 px-8 mb-3">
            <h2 className="text-lg font-semibold text-blue-500">Crear Club</h2>
            <button
              className="text-white bg-red-500 hover:bg-red-700 rounded-full w-8 h-8 flex justify-center items-center text-2xl"
              onClick={handleActivateModal}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-2 flex flex-col ">
              <label>
                <h1 className="text-blue-500 font-bold">Input 1</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input1"
                  placeholder="Input 1"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 2</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input2"
                  placeholder="Input 2"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 3</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input3"
                  placeholder="Input 3"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 4</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input4"
                  placeholder="Input 4"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 5</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input5"
                  placeholder="Input 5"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 5</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input5"
                  placeholder="Input 5"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 5</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input5"
                  placeholder="Input 5"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h1 className="text-blue-500 font-bold">Input 5</h1>
                <input
                  className="border border-gray-300 px-4 py-2 rounded-md w-full"
                  type="text"
                  name="input5"
                  placeholder="Input 5"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 mb-3 rounded-md"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalForm;
