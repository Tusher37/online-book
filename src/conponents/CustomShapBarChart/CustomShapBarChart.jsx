// // import PropTypes from 'prop-types';
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// // const CustomShapeBarChart = ({ bookData }) => {
// //   return (
// //     <BarChart width={600} height={300} data={bookData}>
// //       <CartesianGrid strokeDasharray="3 3" />
// //       <XAxis dataKey={bookData.bookName} />
// //       <YAxis dataKey={bookData.totalPages}/>
// //       <Tooltip />
// //       <Legend />
// //       <Bar dataKey={bookData.totalPages} fill="#8884d8" shape={<CustomBar />} />
// //     </BarChart>
// //   );
// // };

// // const CustomBar = (props) => {
// //   const { x, y, width, height, fill } = props;

// //   // Customize bar shape here, e.g., adding rounded corners
// //   const radius = 10;
// //   return (
// //     <g>
// //       <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
// //     </g>
// //   );
// // };

// // CustomShapeBarChart.propTypes = {
// //   bookData: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       name: PropTypes.string.isRequired,
// //       pages: PropTypes.number.isRequired
// //     })
// //   ).isRequired
// // };

// // export default CustomShapeBarChart;


// // ##############################################################

// // export default function App() {
// //   return (
// //     <BarChart
// //       width={500}
// //       height={300}
// //       data={data}
// //       margin={{
// //         top: 20,
// //         right: 30,
// //         left: 20,
// //         bottom: 5,
// //       }}
// //     >
// //       <CartesianGrid strokeDasharray="3 3" />
// //       <XAxis dataKey="name" />
// //       <YAxis />
// //       <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
// //         {data.map((entry, index) => (
// //           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
// //         ))}
// //       </Bar>
// //     </BarChart>
// //   );
// // }


// // ################################################################################################

// // import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// // import PropTypes from 'prop-types';

// // const CustomShapBarChart = ({bookData}) => {

// //     const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// //     const data = [
// //         {
// //             name: 'Page A',
// //             uv: 500,
// //         },
// //         {
// //             name: 'Page B',
// //             uv: 300,
// //         },
// //         {
// //             name: 'Page C',
// //             uv: 370,
// //         },
// //     ];

// //     const getPath = (x, y, width, height) => {
// //     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
// //     ${x + width / 2}, ${y}
// //     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
// //     Z`;
// //     };

// //     const TriangleBar = (props) => {
// //     const { fill, x, y, width, height } = props;

// //     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// //     };
    
// //     return (
// //             <BarChart
// //                 width={500}
// //                 height={300}
// //                 data={data}
// //                 margin={{
// //                     top: 20,
// //                     right: 30,
// //                     left: 20,
// //                     bottom: 5,
// //                 }}
// //                 >
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="name" />
// //                 <YAxis />
// //                 <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
// //                     {data.map((entry, index) => (
// //                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
// //                     ))}
// //                 </Bar>
// //             </BarChart>
// //     );
// // };

// // CustomShapBarChart.propTypes = {
// //     bookData: PropTypes.object
// // }

// // export default CustomShapBarChart;




// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import PropTypes from 'prop-types';

// const CustomShapeBarChart = ({readBooks}) => {
//     // console.log(readBooks.bookName);
//     const {bookName, totalPages} = readBooks;
//     const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
//     // Ensure bookData is an array and map it to the required data structure
//     // const data = readBooks instanceof Array ? readBooks.map((bookData, index) => ({
//     //     name: bookData.bookName,
//     //     uv: bookData.totalPages,
//     //     color: colors[index % colors.length] // Assign color based on index
//     // })) : [];

//     const data = [
//         {
//             name: `${bookName}`,
//             uv: `${totalPages}`,
//             color: colors[0],
//         }
//     ]

//     const getPath = (x, y, width, height) => {
//         return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//         ${x + width / 2}, ${y}
//         C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//         Z`;
//     };

//     const TriangleBar = (props) => {
//         const { fill, x, y, width, height } = props;

//         return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//     };

//     return (
//         <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//                 top: 20,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//         >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//                 {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//             </Bar>
//         </BarChart>
//     );
// };

// CustomShapeBarChart.propTypes = {
//     readBooks: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             pages: PropTypes.number.isRequired
//         })
//     ).isRequired
// };

// export default CustomShapeBarChart;

