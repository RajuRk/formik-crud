import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

function Editproducts() {
  let url = "https://6151d83c4a5f22001701d4ca.mockapi.io/users";

  let navigate = useNavigate();
  const params = useParams();

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

  const formik = useFormik({
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

  let handleSave = async (values) => {
    let dataOdd = {
      name: formik.values.name,
      picturelink: formik.values.picturelink,
      videolink: formik.values.videolink,
      notes: formik.values.notes,
      course: formik.values.course,
      cuisine: formik.values.cuisine,
      calories: formik.values.calories,
      protein: formik.values.protein,
      fiber: formik.values.fiber,
      price: formik.values.price,
    };

    await fetch(`${url}/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataOdd),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/allproducts");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let getData = async () => {
    await fetch(`${url}/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        formik.setFieldValue("name", data.name);
        formik.setFieldValue("picturelink", data.picturelink);
        formik.setFieldValue("videolink", data.videolink);
        formik.setFieldValue("notes", data.notes);
        formik.setFieldValue("course", data.course);
        formik.setFieldValue("cuisine", data.cuisine);
        formik.setFieldValue("calories", data.calories);
        formik.setFieldValue("protein", data.protein);
        formik.setFieldValue("fiber", data.fiber);
        formik.setFieldValue("price", data.price);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // let getProducts = async () => {
  //   let res = await axios.get(`${url}/${params.id}`);
  //   console.log(params.id);
  //   setName(res.data.name);
  //   setPicturelink(res.data.picturelink);
  //   setVideolink(res.data.videolink);
  //   setNotes(res.data.notes);
  //   setCourse(res.data.course);
  //   setCuisine(res.data.cuisine);
  //   setCalories(res.data.calories);
  //   setProtein(res.data.protein);
  //   setFiber(res.data.fiber);
  //   setPrice(res.data.price);
  // };

  useEffect(() => {
    getData();
  }, []);

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
            value={formik.values.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={formik.handleChange}
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
            value={formik.values.picturelink}
            onChange={formik.handleChange}
            // onChange={(e) => setPicturelink(e.target.value)}
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
            value={formik.values.videolink}
            onChange={formik.handleChange}
            // onChange={(e) => setVideolink(e.target.value)}
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
            value={formik.values.notes}
            onChange={formik.handleChange}
            // onChange={(e) => setNotes(e.target.value)}
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
            value={formik.values.course}
            onChange={formik.handleChange}
            // onChange={(e) => setCourse(e.target.value)}
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
            value={formik.values.cuisine}
            onChange={formik.handleChange}
            // onChange={(e) => setCuisine(e.target.value)}
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
            value={formik.values.calories}
            onChange={formik.handleChange}
            // onChange={(e) => setCalories(e.target.value)}
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
            value={formik.values.protein}
            onChange={formik.handleChange}
            // onChange={(e) => setProtein(e.target.value)}
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
            value={formik.values.fiber}
            onChange={formik.handleChange}
            // onChange={(e) => setFiber(e.target.value)}
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
            value={formik.values.price}
            onChange={formik.handleChange}
            // onChange={(e) => setPrice(e.target.value)}
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

export default Editproducts;
