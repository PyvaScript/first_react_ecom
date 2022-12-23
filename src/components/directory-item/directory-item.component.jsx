import { DirectoryItemContainer, DirectoryItemBody } from './directory-item.styles.jsx'

const DirectoryItem=({ category })=>{
    const { imageUrl, title}=category;
    return(
        <DirectoryItemContainer>
            <div
                className="background-image"
                style={{
                    backgroundImage:`url(${imageUrl})`,
                }}
            />
            <DirectoryItemBody>
                <h2>{ title }</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem
