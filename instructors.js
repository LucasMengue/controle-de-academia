const fs = require("fs");
const data = require("./data.json");

// show
exports.show = function (req, res) {
  const { id } = req.params;

  const foundInstructor = data.instructors.find(function (instructor) {
    return id == instructor.id;
  });

  if (!foundInstructor) {
    return res.send("Instructor not found!");
  }

  const instructor = {
    ...foundInstructor,
    age: "",
    gender: "",
    services: "",
    created_at: "",
  };

  return res.render("instructors/show", { instructor: foundInstructor });
};

// create
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields");
    }
  }

  let { avatar_url, name, birth, gender, services, created_at, id } = req.body;

  birth = Date.parse(birth);
  created_at = Date.now();
  id = Number(data.instructors.length + 1);

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at,
  });

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      return res.send("Write file error!");
    }

    return res.redirect("/instructors");
  });

  //return res.send(req.body);
};
// update

// delete
