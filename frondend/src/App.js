
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Signin from './auth/Signin/Signin.js'
import Signup from './auth/Signup/Signup.js';
import Forgotpassword from './auth/Forgotpassword/Forgotpassword.js';
// import Header  from './components/header/header.js'
import Dashboard from './components/Dashboard/Dashboard.js';
import Layout from './components/layout.js';
import NoHeader from './components/noheader.js';
import BookDetail from './components/BookDetails.js';
import ReadingList from './components/ReadingList.js'
import ReadingList1 from './components/ReadingList1.js';
import SocialCards from './components/SocialCards.js';
import AlreadyRead from './components/AlreadyRead.js';
import Ebook from './components/ebook/ebook.js';

function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin /> } />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/bookdetail" element={<Layout><BookDetail /></Layout>} />
        <Route path="/currentreading" element={<Layout><ReadingList /></Layout>}/>
        <Route path='/current-reading' element={<Layout><ReadingList1 /></Layout>} />
        <Route path='/socialcards' element={<Layout><SocialCards /></Layout>} />
        <Route path='/ebook' element={<Layout><Ebook /></Layout>} />
        <Route path='/already-read' element={<Layout><AlreadyRead /></Layout>} />
        <Route path="/signin" element={<NoHeader><Signin /></NoHeader>} />
        <Route path="/signup" element={<NoHeader><Signup /></NoHeader>} />
        <Route path="/forgotpassword" element={<NoHeader><Forgotpassword /></NoHeader>} />
  
        <Route path='/book-details' element={<BookDetail />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
