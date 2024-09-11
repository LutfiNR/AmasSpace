"use client"

const { Textarea } = require("@nextui-org/react")

const Search=()=>{
    return(
        <Textarea
          variant="underlined"
          placeholder="Search"
          className="h-6"
        />
    )
}
export default Search;