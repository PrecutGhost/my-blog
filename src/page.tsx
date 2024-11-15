// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { UserInfoAction } from "./components/mantine/UserInfoAction";
import { ArticlesCardsGrid } from "./components/mantine/ArticlesCardsGrid";
import { GlobeDemo } from "./components/ui/globe-demo";


export default function App() {
  return (
    <MantineProvider>
      <UserInfoAction />
      <GlobeDemo />
      <ArticlesCardsGrid />
    </MantineProvider>
  );
}
