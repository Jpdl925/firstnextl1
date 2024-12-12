interface Props{
    params: {slug:string[]};
    searchParams: {sortOrder:string}
}

// Slug page to go to any word after our products end tag
// products/[Whatever word the user is searching]/[Whatever more the user is searching]/[Can keep going on]
// Can't just do /products, will get 404 error, need to do [[...slug]] <-- double brackets

const ProductPage = ({params:{slug},searchParams:{sortOrder}}:Props) => {
  return (
    <>
    <div>ProductPage {slug}{sortOrder}</div>
    </>
  )
}

export default ProductPage