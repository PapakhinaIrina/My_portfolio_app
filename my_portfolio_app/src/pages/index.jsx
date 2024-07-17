import { Route, Routes } from 'react-router-dom';
import Contact  from './contact/contact';
import Landing from './landing/landing';
import Portfolio from './portfolio/portfolio';
import SignUp from './signUp/signUp';
import Widget from './widgetComponent/widget';
import Planner from './planner/planner';
import PhotoGallery from './photoGallery/photoGallery';
import Weather from './weather/weather';

export const Router = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/portfolio/signup' element={<SignUp />} />
      <Route path='/portfolio/widget' element={<Widget />} />
      <Route path='/portfolio/planner' element={<Planner />} />
      <Route path='/portfolio/photo_gallery' element={<PhotoGallery />} />
      <Route path='/portfolio/weather' element={<Weather />} />
    </Routes>
  );
};
