// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import { createRoot } from 'react-dom/client';
 
// const heading = React.createElement('h1', null, 'Biodata Perusahaan');
 
// const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
// const listItem2 = React.createElement('li', null, 'Bidang: Education');
// const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');
 
// const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);
 
// const container = React.createElement('div', null, [heading, unorderedList]);
 
// const root = createRoot(document.getElementById('root'));
// root.render(container);

import logo from "./images/dicoding-logo.png"

// const element = (
//   <div>
//     <h1>Biodata Perusahaan</h1>
//     <ul>
//       <li>Nama: Dicoding Indonesia</li>
//       <li>Bidang: Education</li>
//       <li>Tagline: Decode Ideas, Discover Potential.</li>
//       <img src={logo} alt='dicoding logo' />
//     </ul>
//   </div>
// );

// function SearchBar() {
//   return (
//     <div className="search-bar__container">
//       <input type="text" placeholder="Search..." />
//       <div className="search-bar__in_stock_checkbox">
//         <input type="checkbox" />
//         <label>Only show products in stock</label>
//       </div>
//     </div>
//   );
// }
 
// function ProductCategoryRow({ name }) {
//   return (
//     <tr>
//       <td colSpan="2">
//         <strong>{name}</strong>
//       </td>
//     </tr>
//   );
// }
 
// function ProductRow({ name, price }) {
//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{price}</td>
//     </tr>
//   );
// }
 
// function ProductTable() {
//   return (
//     <div className="product-table__container">
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//         </tr>
//         <ProductCategoryRow name="Sporting Goods" />
//         <ProductRow name="Football" price="$49.99" />
//         <ProductRow name="Baseball" price="$9.99" />
//         <ProductRow name="Baseketball" price="$49.99" />
//         <ProductCategoryRow name="Electronics" />
//         <ProductRow name="iPod Touch" price="$99.99" />
//         <ProductRow name="iPhone 5" price="$399.99" />
//         <ProductRow name="Nexus 7" price="$199.99" />
//       </table>
//     </div>
//   );
// }
 
// function FilterableProductTable() {
//   return (
//     <div className="container">
//       <SearchBar />
//       <ProductTable />
//     </div>
//   );
// }
 




// latihan membuat dan komposisi react komponent
function Button({link}) {
  // TODO: selesaikan component-nya
  return <a href={link}>Find out more</a>;
}
 
function CardHeader({image, category}) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}
 
function CardBody({ date, title, content, link }) {
  // TODO: selesaikan component-nya
  return (
    <div>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </div>
  );
}
 
function Card({ image, category, date, title, content, link }) {
  // TODO: selesaikan component-nya
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}
 
function Header( {title, subtitle}) {
  // TODO: selesaikan component-nya
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
 
function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];
 
  // TODO: selesaikan component-nya
  return (
    <div>
      <Header title="Latest News" subtitle="Covering March & April 2022" />
      <Card 
        title={someNews[0].title}
        date={someNews[0].date}
        content={someNews[0].content}
        image={someNews[0].image}
        category={someNews[0].category}
        link={someNews[0].link}
      />
      <Card 
        title={someNews[1].title}
        date={someNews[1].date}
        content={someNews[1].content}
        image={someNews[1].image}
        category={someNews[1].category}
        link={someNews[1].link}
      />
      <Card 
        title={someNews[2].title}
        date={someNews[2].date}
        content={someNews[2].content}
        image={someNews[2].image}
        category={someNews[2].category}
        link={someNews[2].link}
      />

    {/* Membuat list */}
    <ul id="news">
      { someNews.map((news) => <li>{news.title}</li>) }
    </ul>
    </div>
  );
}
 
const root = createRoot(document.getElementById('root'));
root.render(<News />);
// const root = createRoot(document.getElementById('root'));
// root.render(FilterableProductTable);