export const filterData = ({searchQuery='', data=[]}) => {
    searchQuery = searchQuery.toLowerCase();

    let filteredData = data.filter((item) => {
        return (
            item.creator.username.toLowerCase().includes(searchQuery) ||
            item.creator.email.toLowerCase().includes(searchQuery) ||
            item.prompt.toLowerCase().includes(searchQuery) ||
            item.tag.toLowerCase().includes(searchQuery)
        );
    })

    return filteredData;
}
