// fetchProject.js > refactor

import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'e9dkpnl2h1lf',
  environment: 'master',
  accessToken: 'tEYycx0ada2JFVibCGcviJcsDVxBva4uT8nBaLJhEBE',
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: 'projects' });
      const { items } = resp;
      const projects = items.map((item) => {
        // title url id img
        const { title, url, image, urlGithub, techStack } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id, urlGithub, techStack };
      });


      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};

export { useFetchProjects };
