import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Certificates = () => {
  // Array using useSate for showing certificates
  const [certificates, setCertificates] = useState([
    {
      name: 'Modern Robotics 1,2,3',
      description: 'Passed this course with excellent marks',
      completionDate: 'October 2022',
    },
    {
      name: 'Python Coursera',
      description: 'Passed this course with excellent marks',
      completionDate: 'Noverber 2022',
    },
    {
      name: 'Algortihms 1,2',
      description: 'Passed this course with excellent marks',
      completionDate: 'Noverber 2023',
    },
  ]);

  // This is using for creating certificate
  const [newCertificate, setNewCertificate] = useState({
    name: '',
    description: '',
    completionDate: '',
  });

  // This is using for editing certificate
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCertificate, setEditingCertificate] = useState({
    name: '',
    description: '',
    completionDate: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingIndex(null);
    setEditingCertificate({
      name: '',
      description: '',
      completionDate: '',
    });
  };
  // ensures that the corresponding state is updated (editingCertificate or newCertificate)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingIndex !== null) {
      setEditingCertificate({
        ...editingCertificate,
        [name]: value,
      });
    } else {
      setNewCertificate({
        ...newCertificate,
        [name]: value,
      });
    }
  };

  // Creating new Certificate
  const addCertificate = () => {
    if (editingIndex !== null) {
      const updatedCertificates = [...certificates];
      updatedCertificates[editingIndex] = editingCertificate;
      setCertificates(updatedCertificates);
      setEditingIndex(null);
      setEditingCertificate({
        name: '',
        description: '',
        completionDate: '',
      });
    } else {
      setCertificates([...certificates, newCertificate]);
      setNewCertificate({
        name: '',
        description: '',
        completionDate: '',
      });
    }
    closeModal();
  };

  // Editing certificate
  const editCertificate = (index) => {
    setEditingIndex(index);
    setEditingCertificate(certificates[index]);
    openModal();
  };

  // Deleting certificate
  const deleteCertificate = (index) => {
    const updatedCertificates = [...certificates];
    updatedCertificates.splice(index, 1);
    setCertificates(updatedCertificates);
  };

  return (
    <div>
      <div className="aboutme-container">
        <img src="/icons/mxr.png" alt="MXR Logo" className="mxr-logo" />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certificates" className="current">
                Certificates
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="certificates-container">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-item">
            <h3 className='cert-h2'>{certificate.name}</h3>
            <p className='cert-p'>{certificate.description}</p>
            <p>Completion Date: {certificate.completionDate}</p>
            <button onClick={() => editCertificate(index)}>Edit</button>
            <button onClick={() => deleteCertificate(index)}>Delete</button>
          </div>
        ))}
      </div>
      <button className='add-btn' onClick={openModal}>Add Certificate</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={editingIndex !== null ? editingCertificate.name : newCertificate.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={editingIndex !== null ? editingCertificate.description : newCertificate.description}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Completion Date:
                <input
                  type="text"
                  name="completionDate"
                  value={editingIndex !== null ? editingCertificate.completionDate : newCertificate.completionDate}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" onClick={addCertificate}>
                {editingIndex !== null ? 'Save ' : 'Add '}
              </button>
              <button onClick={closeModal}>Close</button>
            </form>  
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
