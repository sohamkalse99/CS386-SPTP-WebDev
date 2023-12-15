const express = require('express');
const router = express.Router();

const userSchema = require('../models/UserSchema');
const carSchema = require('../models/CarSchema');
const bookingSchema = require('../models/BookingSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const SECRET_KEY = 'your-secret-key';

router.post("/", async(req, res)=>{
  const{email, password} = req.body;

  // console.log(email);
  try{
    const check = await userSchema.findOne({email:email});
  // console.log(email);
    
    if(!check){
      return res.status(200).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, check.password);

    if(!passwordMatch){
      return res.status(200).json({ message: 'Invalid credentials' });
    }
    
    // res.status(200).json({ message: 'Login successful' });

    // const token = jwt.sign({ userId: user._id }, SECRET_KEY);
    // res.json({ token });
    const token = jwt.sign({ userId: check._id, isAdmin: check.isAdmin }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  }catch(e){
    console.log(e);
    res.status(500).json({ message: 'An error occurred' });
  }
})

router.post("/register", async(req, res)=>{

  const{email, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const regUser = {
    email: email,
    password: hashedPassword,
  };
  try{

    const check = await userSchema.findOne({email:email});
    
    if(check){
      res.status(200).json({ message: "exist" });
    }else{

      await userSchema.create([regUser]);

      res.status(200).json({ message: "notexist" });
      
    }
    
  }catch(e){
    res.status(500).json({ message: "An error occurred." });

  }
})

router.post("/adminform", async(req, res)=>{
  
  const{carName, modelName, CompanyName, RentPrice, Capacity} = req.body;
  // console.log(rent);
  // const rentAsInteger = parseInt(rent, 10);
  // const capacityAsInteger = parseInt(capacity, 10);

  const regCar = {
    carName: carName,
    model: modelName,
    company: CompanyName,
    rent: RentPrice,
    capacity: Capacity
  };

  try{
    const check = await carSchema.findOne({carName:carName});

    if(check){
      return res.status(200).json({ message: 'exists' });
    }else{
 
      await carSchema.create([regCar]);
      res.status(200).json({ message: "added" });
    }

  }catch(e){
    res.status(500).json({ message: "An error occurred." });
  }
})

router.get("/viewuser", async(req, res)=>{
  try{
    const cars = await carSchema.find();
    res.status(200).json(cars);
  }catch(e){
    res.status(500).json({ message: "An error occurred." });
  }
})

router.get("/viewadmin", async(req, res)=>{
  try{
    const cars = await carSchema.find();
    res.status(200).json(cars);
  }catch(e){
    res.status(500).json({ message: "An error occurred." });
  }
})

router.delete("/deleteCar/:id", async (req, res) => {
  try {
    const deletedCar = await carSchema.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.get("/updateadmin/:carId", async (req, res) => {
  try {
    const carId = req.params.carId;
    const car = await carSchema.findById(carId);
    // console.log(car);
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ message: "Error fetching car details" });
  }
});

router.put("/updateadmin/:carId", async (req, res) => {
  try {
    const carId = req.params.carId;
    const updatedCarDetails = req.body;

    // console.log(req.body);
    // Find and update the car details
    await carSchema.findByIdAndUpdate(carId, updatedCarDetails);

    res.status(200).json({ message: "Car details updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating car details" });
  }
});
module.exports = router;