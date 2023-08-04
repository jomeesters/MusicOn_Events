import { Button, Input } from "@chakra-ui/react";
import React from "react";

export default function Filter({
  searchValue,
  setSearchValue,
  setsearchParams,
}) {
  return (
    <div>
      <div className="filter-container">
        <label>
          <Input
            type="search"
            placeholder="Search for Events"
            mt="2rem"
            mb="2rem"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </label>
        <Button
          bg="black"
          m=".2rem"
          color="white"
          onClick={() => setsearchParams({})}
        >
          All
        </Button>
        <Button
          bg="black"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [1] })}
        >
          Techno
        </Button>
        <Button
          bg="black"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [2] })}
        >
          House
        </Button>
        <Button
          bg="black"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [3] })}
        >
          Disco
        </Button>
        <Button
          bg="black"
          color="white"
          m=".2rem"
          onClick={() => setsearchParams({ categoryIds: [4] })}
        >
          Other
        </Button>
      </div>
    </div>
  );
}
