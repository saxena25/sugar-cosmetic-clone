import {Routes, Route} from 'react-router-dom';
import SugarPlay from '../pages/SugarPlay';
import Lips from '../pages/Lips';
import Eyes from '../pages/Eyes';
import Face from '../pages/Face';
import Nails from '../pages/Nails';
import SkinCare from '../pages/SkinCare';
import Accessories from '../pages/Accessories';
import Gifting from '../pages/Gifting';
import BestSellers from '../pages/BestSellers';
import NewLaunchers from '../pages/NewLaunchers';
import Offers from '../pages/Offers';
import Blog from '../pages/Blog';
import Home from '../pages/Home';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sugarPlay' element={<SugarPlay />} />
            <Route path='/lips' element={<Lips />} />
            <Route path='/eyes' element={<Eyes />} />
            <Route path='/face' element={<Face />} />
            <Route path='/nails' element={<Nails />} />
            <Route path='/skinCare' element={<SkinCare />} />
            <Route path='/accessories' element={<Accessories />} />
            <Route path='/gifting' element={<Gifting />} />
            <Route path='/bestSellers' element={<BestSellers />} />
            <Route path='/newLaunchers' element={<NewLaunchers />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/blog' element={<Blog />} />
        </Routes>
    )
}

export default AllRoutes;