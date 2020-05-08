import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(node => {
    const { frontmatter: { title, slug, author } = {}, excerpt } = node;
    return { title, slug, author, excerpt };
  });
};

export default usePosts;
