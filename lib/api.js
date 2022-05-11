async function fetchAPI(query, { variables } = {}) {

    const res = await fetch(`http://nitroblog.nitro/api`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json.data
  }
  
  export async function getAllPostsWithSlug() {
    const data = fetchAPI(`
        query getAllPosts {
            entries(section: "articles") {
                id
                title
                slug
            }
        }
    `)
    return data?.entries
  }

  export async function getAllPostsByCategory(slug) {
    const data = await fetchAPI(`
      query getAllPostsByCategory {
        entries(section: "articles", relatedToCategories: [{slug: "${slug}"}]) {
          title
          slug
          ... on articles_default_Entry {
            id
            category {
              slug
            }
            publishDate
            articleBody
            headline
            subHeadline
          }
        }
      },
    `,{
      variables: {
        where: {
          slug,
        }
      },
    }
  )
  return data
}
  
  export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
      `
      query getArticles {
        entries(section: "articles") {
          id
          title
          slug
          status
          ... on articles_default_Entry {
            headline
            subHeadline
            excerpt
            publishDate
            articleFormat
            category {
              id
              title
            }
            tags {
              id
              title
            }
            publishDate
            articleBody
          }
        }
      }
    `,
    )
    return data?.entries
  }
  
  export async function getPostAndMorePosts(slug) {
    const data = await fetchAPI(
        `
        query getPostWithSlug {
            entries(slug: "${slug}") {
              id
              ... on articles_default_Entry {
                id
                slug
                headline
                subHeadline
                articleFormat
                articleBody
                manualRelatedArticles {
                  ... on articles_default_Entry {
                    id
                    title
                    subHeadline
                    slug
                  }
                }
                category {
                  id
                  slug
                }
              }
            }
          }
          
     `,
      {
        variables: {
          where: {
            slug,
          }
        },
      }
    )
    return data
  }
  
  export async function getAllPagesWithSlug() {
    const data = fetchAPI(`
      {
        entries{
          slug
        }
      }
    `)
    return data.allPages
  }
  
  
  export async function getPageBySlug(slug) {
    const data = await fetchAPI(
      `
      query getPageBySlug{
        pageBy(uri: "about") {
          title
          content
        }
      }`
    );
    return data
  }
  
  export async function getPage(slug) {
    const data = await fetchAPI(
      `
        query getPage{
          pages(where: { slug: "${slug}" }){
            id
            title
            slug
            intro_text
            flex_content{
              __typename
                ... on ComponentGeneralBallsack {
                  ballsack_title
                  ballsack_text
                }
                ... on ComponentGeneralContactInfo{
                  address
                  email
                  telephone
                }
                ... on ComponentGeneralAccordion {
                  accordion{
                    title
                    content
                  }
                }
                ... on ComponentGeneralTabs{
                  tabunit{
                    tab_title
                    tab_content
                  }
               }
            }
        }
    }
    `
    );
  
    return data;
  }
  
  export async function getHomePage() {
    const data = await fetchAPI(
      `
      query Home {
        pageBy(uri: "home") {
          title
          slug
          content
        }
      }
  
      `
    );
    return data
  }
  
  