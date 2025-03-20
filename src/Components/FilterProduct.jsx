import React from 'react'

const FilterProduct = () => {
    const products =[
        {id:1,title:'iphone-15',catagory:'mobile',price:70000},
        {id:2,title:'HP probook', catagory:"laptop",price:100000},
        {id:3,title:'Mi tab',catagory:'tablet',price:20000},
        {id:4,title:'sony camera', catagory:'camera',price:250000},
        {id:5,title:'apple watch',
        catagory:'watch',price:10000}

    ];
    const filterData = products.filter((data)=>data.catagory=='mobile');
    console.log(filterData);
  return (
    <div>
      {filterData.map(data=><div key={data.id}>
        <h1>{data.title}</h1>
        <p>{data.price}</p>
      </div>)}
    </div>
  )
}

export default FilterProduct
