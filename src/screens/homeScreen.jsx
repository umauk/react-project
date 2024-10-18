import CardExample from "../components/cards/cards"
import Navbar from "../components/header"
import { CustomImage } from "../components/images"
import { FindingNest } from "../components/spots-rent"

export const HomeScreen=()=>{


    const styles = {
        container: {
          position: 'relative', // Create a positioning context
          height: "calc(100vh - 64px)", // Total screen height minus the navbar's height
          width: "100%",
          overflow: 'hidden', // Prevents overflow of content
        },
        customImage: {
          height: '95vh', // Ensure the image takes full height
          width: '100%', // Ensure the image takes full width
          position: 'relative', // Set position to relative
          zIndex: 1, // Ensure the image is behind the FindingNest component
        },
        findingNest: {
          position: 'absolute', // Position FindingNest absolutely
          top: '64px', // Adjust this value based on your navbar height
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2, // Ensure it overlays on top of CustomImage
         
          padding: '20px', // Optional: Add padding for better spacing
          boxSizing: 'border-box', // Ensure padding is included in height
        }
      }
    return(
        <>
       <div>
      <div>
      <div style={styles.container}>
      <Navbar />
      <CustomImage source="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg" style={styles.customImage} />
      <div style={styles.findingNest}>
        <FindingNest />
      </div>
    </div>
    <div>
      <CardExample/>
    </div>
    </div>
    </div> 
        </>
    )
}