export default async function handler(req, res) {
    res.setPreviewData({});
    const response = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts`, { 
            cache:'force-cache', 
        }
    );
    const data = await response.json();
    // console.log(data);
    res.status(200).json(
      { 
        schlerp: 'Mderp', 
        floop: 'Magoop', 
        posts: data 
      })
  }
