const PlatziAPI= async (url: string, id: string = null) => {

  if (id !==null) {
      const response = await fetch(`https://api.escuelajs.co/api/v1/${url}/${id}`);
      const data = await response.json();
      console.log(data)
      return data;
    } else {
      const response = await fetch(`https://api.escuelajs.co/api/v1/${url}`);
      const data = await response.json();
      console.log(data)
      return data;
    }
}

export default PlatziAPI
