import { Grid } from '@mui/material/';
import loadingLogo from "../assets/loading.gif";
import BlogCards from '../components/BlogCards';
import { getData} from "../redux/thunk/blogThunk"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function Dashboard() {
  const { dataArray } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData)
  }, [dispatch])
  console.log(dataArray);

  return (
    <div className='dashboard'>
      <h1>──── DASHBOARD ────</h1>
      <Grid className='gridContainer' container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {!(dataArray) ? <img src={loadingLogo} alt="" className="loading" />
          :
          dataArray?.map((data) => (
            <BlogCards data={data} key={data.id} />
          ))}
      </Grid>
    </div>
  );
}