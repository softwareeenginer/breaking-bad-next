const getClientSide = async = (id) => {
    const result = fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        });

    return result;
}