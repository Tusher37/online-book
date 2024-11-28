import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredReadList } from '../Utility/localStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
    fetch('/bookData.json')
    .then(res => res.json())
    .then(data => setReadBooks(data));
},[])

const [data, setData] = useState([]);
useEffect(() => {
    const storedReadBookListIds = getStoredReadList();
    if(readBooks.length >0){
        const storedReadBooks = [];
        for(const id of storedReadBookListIds){
            const book = readBooks.find(book => book.bookId === id);
            if(book){
                storedReadBooks.push(book);
            }
        }
        setData(storedReadBooks);
    }
},[readBooks])

  return (
    <BarChart
      width={1300}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis dataKey="totalPages"/>
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
