import DirectoryItem from "../directory-item/directory-item.component.jsx"
import "./directory.styles.scss"

const Directory=({categories})=>{
    return(
        <div className="categories-container">
            {categories.map((category)=>(
                <DirectoryItem key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default Directory;
