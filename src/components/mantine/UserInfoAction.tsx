import { Avatar, Text, Paper } from "@mantine/core";
import { DockDemo } from "../ui/dock-demo";

export function UserInfoAction() {
  return (
    <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src="/public/head.jpeg"
        size={180}
        radius={180}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        AlexNeo
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        alexneo4513@gmail.com
      </Text>
      <DockDemo />
      
    </Paper>
  );
}
