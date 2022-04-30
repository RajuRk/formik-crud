import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function Addproducts() {
  // let url = "https://6151d83c4a5f22001701d4ca.mockapi.io/users";

  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [picturelink, setPicturelink] = useState("");
  let [videolink, setVideolink] = useState("");
  let [notes, setNotes] = useState("");
  let [course, setCourse] = useState("");
  let [cuisine, setCuisine] = useState("");
  let [calories, setCalories] = useState("");
  let [protein, setProtein] = useState("");
  let [fiber, setFiber] = useState("");
  let [price, setPrice] = useState("");

  let formik = useFormik({
    initialValues: {
      name: "",
      picturelink: "",
      videolink: "",
      notes: "",
      course: "",
      cuisine: "",
      calories: "",
      protein: "",
      fiber: "",
      price: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name is required")
        .matches(/^[a-zA-Z \s]+$/, "Character sholud be alphabetic")
        .min(3, "minimum 3 character required")
        .max(15, "Maximum 15 character only"),
      picturelink: yup
        .string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter image link"),
      videolink: yup
        .string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter video link"),
      notes: yup
        .string()
        .required("Notes Required")
        .min(15, "minimum 15 character required")
        .max(150, "Maximum 150 character only"),
      course: yup.string().required("Course is required"),
      cuisine: yup.string().required("Cuisine is required"),
      calories: yup.number().required("Calories is required"),
      protein: yup.number().required("Protein is required"),
      fiber: yup.number().required("Fiber is required"),
      price: yup.number().required("Price is required"),
    }),
    onSubmit: (values) => {
      handleSave(values);
    },
  });

  let handleSave = async (data) => {
    try {
      let res = await axios.post(
        "https://6151d83c4a5f22001701d4ca.mockapi.io/users",
        data,
        {
          name,
          picturelink,
          videolink,
          notes,
          course,
          cuisine,
          calories,
          protein,
          fiber,
          price,
        }
      );
      console.log(res);
      navigate("/allproducts");
    } catch (error) {
      console.log(error);
    }
  };

  // let getProducts = () =>{
  //   navigate("/allproducts");
  // }

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Dish Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="picturelink"
            className="form-control"
            placeholder="Dish Picture Link"
            onChange={formik.handleChange}
            value={formik.values.picturelink}
          />
          {formik.touched.picturelink && formik.errors.picturelink ? (
            <div className="error">{formik.errors.picturelink}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="videolink"
            className="form-control"
            placeholder="Dish Video Link"
            onChange={formik.handleChange}
            value={formik.values.videolink}
          />
          {formik.touched.videolink && formik.errors.videolink ? (
            <div className="error">{formik.errors.videolink}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="notes"
            className="form-control"
            placeholder="notes"
            onChange={formik.handleChange}
            value={formik.values.notes}
          />
          {formik.touched.notes && formik.errors.notes ? (
            <div className="error">{formik.errors.notes}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="course"
            className="form-control"
            placeholder="Course Type"
            onChange={formik.handleChange}
            value={formik.values.course}
          />
          {formik.touched.course && formik.errors.course ? (
            <div className="error">{formik.errors.course}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="cuisine"
            className="form-control"
            placeholder="Cuisine"
            onChange={formik.handleChange}
            value={formik.values.cuisine}
          />
          {formik.touched.cuisine && formik.errors.cuisine ? (
            <div className="error">{formik.errors.cuisine}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="calories"
            className="form-control"
            placeholder="Calories in Kcal (Kilo calories)"
            onChange={formik.handleChange}
            value={formik.values.calories}
          />
          {formik.touched.calories && formik.errors.calories ? (
            <div className="error">{formik.errors.calories}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="protein"
            className="form-control"
            placeholder="Protein in g"
            onChange={formik.handleChange}
            value={formik.values.protein}
          />
          {formik.touched.protein && formik.errors.protein ? (
            <div className="error">{formik.errors.protein}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="fiber"
            className="form-control"
            placeholder="Fiber in mg (milli grams)"
            onChange={formik.handleChange}
            value={formik.values.fiber}
          />
          {formik.touched.fiber && formik.errors.fiber ? (
            <div className="error">{formik.errors.fiber}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Dish price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Addproducts;
