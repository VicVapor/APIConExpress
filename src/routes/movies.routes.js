const express = require("express");
const movie = require("../models/movie");
const router = express.Router();
const path = require("path");

/*ROUTES:*/
router.get("/", async (req, res) => {
  const movies = await movie.find();
  res.json(movies);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const movieById = await movie.findById(id);
  res.json(movieById);
});

router.post("/", async (req, res) => {
  const movieToPost = new movie(req.body);
  await movieToPost.save();
  res.send({
    status: "Movie successfully created",
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    tittle,
    description,
    director,
    genre,
    releaseYear,
    language,
    minimun_Age,
  } = req.body;
  const updatedMovie = await movie.findByIdAndUpdate(id, {
    $set: {
      tittle,
      description,
      director,
      genre,
      releaseYear,
      language,
      minimun_Age,
    },
  });
<<<<<<< HEAD
  res.send("Movie updated.");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await movie.findByIdAndDelete(id);
  res.send("Movie deleted.");
=======
  /*res.send({
    status: "Movie successfully updated.",
  });*/
  res.json(updatedMovie);
});

router.put('/', async (req, res)=>{

>>>>>>> 1967a09c27e190f1846b5844e02468df192509c0
});

module.exports = router;
