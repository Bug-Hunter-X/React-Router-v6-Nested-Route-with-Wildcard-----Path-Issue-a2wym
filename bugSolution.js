```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactContainer() {
  return (
    <div>
      <h1>Contact</h1>
      <Routes>
        <Route path=":contactId" element={<ContactDetails/>}/><Route path="*" element={<NotFound/>}
        </Routes>
    </div>
  );
}

function ContactDetails() {
  const { contactId } = useParams();
  return <div>Contact Details: {contactId}</div>;
}

function NotFound() {
  return <div>404 Not Found</div>;
}
```