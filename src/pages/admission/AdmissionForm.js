import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logos/file4.png'; 

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    admissionNo: '',
    medium: '',
    pupilName: '',
    motherTongue: '',
    dobFigures: '',
    dobWords: '',
    aadharCardNo: '',
    nationality: '',
    state: '',
    religion: '',
    caste: '',
    fatherName: '',
    fatherOccupation: '',
    motherOccupation: '',
    address: '',
    phoneNo: '',
    livingWith: '',
    classLastStudied: '',
    transferCertificate: '',
    transferCertificateNumber: '',
    transferCertificateDate: '',
    classSought: '',
    firstLanguage: '',
    secondLanguage: '',
    personalMark1: '',
    personalMark2: '',
    declaration: '',
    declarationAccepted: false,
    applicantName: '',
    applicantDob: '',
    applicantDobWords: '',
    applicantAgeYears: '',
    applicantAgeMonths: '',
    dateOfBirthCertification: '',
    date: '',
    photo: null,
    photoError: '',
    signature: null,
    signatureError: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState(null);
  // const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);




  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setImage(file);
  //     setImagePreviewUrl(URL.createObjectURL(file));
  //   }
  // };

  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, photo: file });
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setPhotoPreview(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setFormData({ ...formData, photoError: 'Only jpg and png images are allowed.' });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setFormData({ ...formData, photoError: 'Image size must be less than 2MB.' });
        return;
      }

      setFormData({ ...formData, photo: file, photoError: '' });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setFormData({ ...formData, signatureError: 'Only jpg and png images are allowed.' });
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setFormData({ ...formData, signatureError: 'Image size must be less than 2MB.' });
        return;
      }

      setFormData({ ...formData, signature: file, signatureError: '' });
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignaturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setFormData({ ...formData, photo: null, photoError: '' });
    setPhotoPreview(null);
  };

  const handleDeleteSignature = () => {
    setFormData({ ...formData, signature: null, signatureError: '' });
    setSignaturePreview(null);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Uploaded image:', image); // Log image file to the console
    setShowPopup(true); // Show the popup upon form submission

  };

  const handleClosePopup = () => {
    setShowPopup(false); // Hide the popup when close button is clicked
  };

  return (
    <div className="admission-form-container">
        <div className="header">
          <div className="logo-section">
            <img src={Logo} alt="School Logo" className="school-logo" />
          </div>
          <div className="school-details">
            <h1 className="school-name">MountFort School</h1>
            <p className="school-address">Aushapur (V), Ghatkesar(M),
                                          Medchal Dist,<br/> Telangana 501301
            </p>
            <p className="school-phone">Phone:  +9912653440 / 9603999926</p>
          </div>
          {/* <div className="photo-section">

            {imagePreviewUrl ? (
              <img src={imagePreviewUrl} alt="Student Photo" className="student-photo" />
            ) : (
              <div className="photo-placeholder">[Photo]</div>
            )}
            <input
              type="file"
              id="student-photo"
              name="studentPhoto"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <label htmlFor="student-photo">Upload Photo</label>

          </div> */}
          {/* <div className="photo-section">
          {photoPreview ? (
            <img src={photoPreview} alt="Student" className="photo-preview" />
          ) : (
            <div className="photo-placeholder">[Photo]</div>
          )}
          <label htmlFor="photoUpload">Upload Photo</label>
          <input
            type="file"
            id="photoUpload"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
          />
        </div> */}
        <div className="photo-section">
          {photoPreview ? (
            <div className="photo-preview">
              <img src={photoPreview} alt="Student" className="student-photo" />
              <button type="button" className="delete-photo" onClick={handleDeletePhoto}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ) : (
            <div className="photo-placeholder">[Photo]</div>
          )}
          <label htmlFor="photoUpload">Upload Photo</label>
          <input
            type="file"
            id="photoUpload"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
          />
          {formData.photoError && <p className="error-message">{formData.photoError}</p>}
        </div>

        </div>
        <div className="form-title">
          <h2>Admission Form</h2>
        </div>
        <form className="admission-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="admission-no">Admission No.</label>
              <input
                type="text"
                id="admission-no"
                name="admissionNo"
                placeholder="Eg: AD4522335"
                value={formData.admissionNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
  
              <h4 id="appendix">APPENDIX 15 (T.E.R)</h4>
            
            </div>
            <div className="form-group">
              <label htmlFor="medium">Medium</label>
              <input
                type="text"
                id="medium"
                name="medium"
                placeholder="Eg: "
                value={formData.medium}
                onChange={handleChange}
                required
              />
            </div>
          </div>

        <div className="form-header">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="pupilName">Name of the Pupil in full (Block Letters)</label>
              <input
                type="text"
                id="pupilName"
                name="pupilName"
                placeholder="Eg: KAPIL SHARMA"
                value={formData.pupilName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherTongue">Mother Tongue of the Pupil</label>
              <input
                type="text"
                id="motherTongue"
                name="motherTongue"
                placeholder="Eg: Telgu, Hindi, etc."
                value={formData.motherTongue}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth in figures and words<br/> MC is enclosed/Not enclosed/Adhaar Card</label>
              <div className="dob-section">
                <input
                  type="date"
                  id="dobFigures"
                  name="dobFigures"
                  placeholder="DD/MM/YYYY"
                  value={formData.dobFigures}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="dobWords"
                  name="dobWords"
                  placeholder="Date in words"
                  value={formData.dobWords}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="aadharCardNo"
                  name="aadharCardNo"
                  placeholder="Aadhar Card No."
                  value={formData.aadharCardNo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality and State to which the pupil belongs,<br/>  ( This information is intended only for statistical purposes)</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                placeholder="E.g: India"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="E.g: Delhi"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="religion">Religion (for statistical purposes)</label>
              <input
                type="text"
                id="religion"
                name="religion"
                placeholder="E.g: Hindu/Muslim, etc."
                value={formData.religion}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="caste">Details of Castes (SC/ST/BC/HCC/OC)</label>
              <input
                type="text"
                id="caste"
                name="caste"
                placeholder="Eg: "
                value={formData.caste}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherName">Name of the Father</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                placeholder="Eg: Mahesh Sharma  "
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherOccupation">Occupation of the Father</label>
              <input
                type="text"
                id="fatherOccupation"
                name="fatherOccupation"
                placeholder="Eg: sevice employee or govt. employee or business person  "
                value={formData.fatherOccupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherName">Name of the Mother</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                placeholder="Eg: Deepika Sharma"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherOccupation">Occupation of the Mother</label>
              <input
                type="text"
                id="motherOccupation"
                name="motherOccupation"
                placeholder="Eg: Housewife, or service employee or govt. employee, etc."
                value={formData.motherOccupation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Full Address</label>
              <textarea
                id="address"
                name="address"
                placeholder="Eg: House no. 54, Robert Street, near Town Bakery, Kr.Puram, Bangalore, PIN-444555 "
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo">Phone No.</label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                placeholder="Eg: 7745***463 "
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="livingWith">Whether living with parent or guardian and local residence if not living with parent or guardian</label>
              <textarea
                id="livingWith"
                name="livingWith"
                placeholder="Eg: mention any one of them "
                value={formData.livingWith}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="classLastStudied">Class last studied, Name of school last attended and Whether qualified for promotion</label>
              <textarea
                type="text"
                id="classLastStudied"
                name="classLastStudied"
                placeholder="Eg:Class-3, Bethany School, Promoted  "
                value={formData.classLastStudied}
                onChange={handleChange}
                required
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="schoolLastAttended">Name of school last attended</label>
              <input
                type="text"
                id="schoolLastAttended"
                name="schoolLastAttended"
                value={formData.schoolLastAttended}
                onChange={handleChange}
                required
              />
            </div> */}
            {/* <div className="form-group">
              <label htmlFor="promotionStatus">Whether qualified for promotion</label>
              <input
                type="text"
                id="promotionStatus"
                name="promotionStatus"
                value={formData.promotionStatus}
                onChange={handleChange}
                required
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="transferCertificate">Whether Transfer Certificate or ESLC, and (or) Record Sheet is attached</label>
              <input
                type="text"
                id="transferCertificate"
                name="transferCertificate"
                placeholder="Eg: If Yes, then name any one of three, like  Transfer Certificate or ESLC, and (or) Record Sheet "
                value={formData.transferCertificate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="transferCertificateNumber">Certificate Number</label>
              <input
                type="text"
                id="transferCertificateNumber"
                name="transferCertificateNumber"
                placeholder="Eg: TC41532 "
                value={formData.transferCertificateNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="transferCertificateDate">Certificate Date</label>
              <input
                type="date"
                id="transferCertificateDate"
                name="transferCertificateDate"
                value={formData.transferCertificateDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="classSought">Class into which admission is sought</label>
              <input
                type="text"
                id="classSought"
                name="classSought"
                placeholder="Eg: Class-1 or 2, etc. "
                value={formData.classSought}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Languages proposed to be taken under</label>
              <div className="language-section">
                <input
                  type="text"
                  id="firstLanguage"
                  name="firstLanguage"
                  placeholder="First Language"
                  value={formData.firstLanguage}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="secondLanguage"
                  name="secondLanguage"
                  placeholder="Second Language"
                  value={formData.secondLanguage}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Personal marks of identification:</label>
              <div className="identification-section">
                <input
                  type="text"
                  id="personalMark1"
                  name="personalMark1"
                  placeholder="Mark 1- Eg: Mole on neck"
                  value={formData.personalMark1}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="personalMark2"
                  name="personalMark2"
                  placeholder="Mark 2"
                  value={formData.personalMark2}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          </div>

        <div className="form-section">
          {/* <div className="form-group">
            <label>Declaration</label>
            <p>
              I declare that the statement given above is correct and that the pupil has not attended any other school besides those mentioned above. I agree to abide by the rules & regulations of the school.
            </p>
            <p>
              I certify that the date of birth of the applicant.....................is...........................
              (in words).............................and his/her present age is...........years................months. And I hereby declare that the entries made in the application are authentic and that no alteration of any kind will be hereafter asked for.
            </p>
            
          </div> */}
          <div className="form-group">
            <label htmlFor="declaration">Declaration</label>
            <div className="declaration-container">

              <input
                type="checkbox"
                id="declarationAccepted"
                name="declarationAccepted"
                checked={formData.declarationAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="declarationAccepted" className="declaration-text">
                I hereby declare that the above information is correct to the best of my knowledge and belief. I have also read the rules and regulations of the School as printed in the School Diary and I agree to abide by them.
              </label>

            </div>  
          </div>
          <p>
            I certify that the date of birth of the applicant  &nbsp;&nbsp;
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              placeholder="Name of Applicant"
              value={formData.applicantName}
              onChange={handleChange}
              required
              style={{ borderBottom: '1px dotted #000', width: '130px', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            /> is  &nbsp;&nbsp;
            <input
              type="date"
              id="applicantDob"
              name="applicantDob"
              value={formData.applicantDob}
              onChange={handleChange}
              required
              style={{ borderBottom: '1px dotted #000', width: '120px', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            /> &nbsp;&nbsp; (in words)
            <input
              type="text"
              id="applicantDobWords"
              name="applicantDobWords"
              placeholder="Date of Birth in Words"
              value={formData.applicantDobWords}
              onChange={handleChange}
              required
              style={{ borderBottom: '1px dotted #000', width: '155px', borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}
            /> and his/her present age is  &nbsp;
            <input
              type="text"
              id="applicantAgeYears"
              name="applicantAgeYears"
              placeholder="Age (Years)"
              value={formData.applicantAgeYears}
              onChange={handleChange}
              required
              style={{ borderBottom: '1px dotted #000', width: '80px', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            /> years  &nbsp;
            <input
              type="text"
              id="applicantAgeMonths"
              name="applicantAgeMonths"
              placeholder="Age (Months)"
              value={formData.applicantAgeMonths}
              onChange={handleChange}
              required
              style={{ borderBottom: '1px dotted #000', width: '100px', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            /> months. And I hereby declare that the entries made in the application are authentic and that no alteration of any kind will be hereafter asked for.
          </p>
         
          <div className="signature-section">
            <div className="signature-date">
              <label htmlFor="date">Date </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            {/* <div className="signature-parent">
              <label htmlFor="signature">Signature of Parent or Guardian</label>
              <input
                type="file"
                id="signature"
                name="signature"
                value={formData.signature}
                onChange={handleChange} 
                required
              />
            </div> */}

            {/* <div className="signature-upload">
              {signaturePreview ? (
                <div className="signature-preview">
                  <img src={signaturePreview} alt="Signature" className="signature-image" />
                  <button type="button" className="delete-signature" onClick={handleDeleteSignature}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ) : (
                <div className="signature-placeholder">[Signature]</div>
              )}
              <label htmlFor="signatureUpload">Upload Signature</label>
              <input
                type="file"
                id="signatureUpload"
                name="signature"
                accept="image/*"
                onChange={handleSignatureChange}
              />
              {formData.signatureError && <p className="error-message">{formData.signatureError}</p>}
            </div> */}
            <div className="signature-upload">
              {signaturePreview ? (
                <div className="signature-preview">
                  <img src={signaturePreview} alt="Signature" className="signature-image" />
                </div>
              ) : (
                <div className="signature-placeholder">[Signature]</div>
              )}
              <div className="signature-upload-actions">
                <label htmlFor="signatureUpload">Upload Signature</label>
                {signaturePreview && (
                  <button type="button" className="delete-signature" onClick={handleDeleteSignature}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                )}
              </div>
              <input
                type="file"
                id="signatureUpload"
                name="signature"
                accept="image/*"
                onChange={handleSignatureChange}
              />
              {formData.signatureError && <p className="error-message">{formData.signatureError}</p>}
            </div>

          </div>
        </div>

        

        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Form Submitted Successfully!</h2>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionForm;
