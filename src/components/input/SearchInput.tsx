import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const SearchInput = () => {
 return <Autocomplete placeholder="Search" leftSection={<IconSearch size={16} stroke={1.5} />} data={["React", "Angular", "Vue", "Next.js", "Riot.js", "Svelte", "Blitz.js"]} visibleFrom="xs" />;
};
