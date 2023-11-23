const baseURL = "//localhost:3001/"
export const getLibros = async () => {
    const response = await fetch(`${baseURL}libros`);
    const data = await response.json();
    console.log(data);

    return data;
};