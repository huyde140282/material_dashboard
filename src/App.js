import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, ThemeSettings, Footer, Sidebar, Layout } from './components'
import {
  Orders, Employees, Customers, Calendar, Kanban, Editor,
  ColorPicker, Line, Area, Bar, Pie, Financial, ColorMapping, Pyramid, Ecommerce, Stacked
} from './pages'

const App = () => {
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* dashboard  */}
          <Route path="/" element={(<Ecommerce />)} />
          <Route path="/ecommerce" element={(<Ecommerce />)} />

          {/* pages  */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

          {/* apps  */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/color-picker" element={<ColorPicker />} />

          {/* charts  */}
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
