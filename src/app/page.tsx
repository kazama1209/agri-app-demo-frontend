'use client';

import {
  Card,
  Title,
  Text,
  Grid,
  Group,
  Badge,
  Button,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function HomePage() {
  const dataLine = [
    { name: '1月', users: 400 },
    { name: '2月', users: 600 },
    { name: '3月', users: 800 },
    { name: '4月', users: 750 },
    { name: '5月', users: 900 },
  ];

  const dataBar = [
    { name: 'A', value: 240 },
    { name: 'B', value: 130 },
    { name: 'C', value: 280 },
    { name: 'D', value: 180 },
  ];

  const dataPie = [
    { name: 'Desktop', value: 65 },
    { name: 'Mobile', value: 25 },
    { name: 'Tablet', value: 10 },
  ];

  const colors = ['#228be6', '#40c057', '#fab005'];

  return (
    <main style={{ padding: 24 }}>
      <Group justify="space-between" mb="md">
        <Title order={2}>ホーム</Title>
        <Button
          onClick={() =>
            notifications.show({ message: 'データ更新完了！', color: 'teal' })
          }
        >
          データを更新
        </Button>
      </Group>

      {/* 概要カード */}
      <Grid mb="lg">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              新規ユーザー
            </Text>
            <Title order={3}>1,240</Title>
            <Badge color="green" variant="light">
              +12% ↑
            </Badge>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              売上
            </Text>
            <Title order={3}>¥540,000</Title>
            <Badge color="blue" variant="light">
              +8% ↑
            </Badge>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              コンバージョン率
            </Text>
            <Title order={3}>3.5%</Title>
            <Badge color="orange" variant="light">
              -0.3% ↓
            </Badge>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              継続率
            </Text>
            <Title order={3}>87%</Title>
            <Badge color="green" variant="light">
              +5% ↑
            </Badge>
          </Card>
        </Grid.Col>
      </Grid>

      {/* チャートセクション */}
      <Grid>
        {/* 折れ線グラフ */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder shadow="sm" radius="md" p="md">
            <Title order={4} mb="xs">
              月別ユーザー推移
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#228be6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 棒グラフ */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder shadow="sm" radius="md" p="md">
            <Title order={4} mb="xs">
              カテゴリ別売上
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dataBar}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#40c057" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 円グラフ */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder shadow="sm" radius="md" p="md">
            <Title order={4} mb="xs">
              デバイス構成比
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={dataPie}
                  dataKey="value"
                  outerRadius={100}
                  label
                >
                  {dataPie.map((_, i) => (
                    <Cell key={i} fill={colors[i]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>
      </Grid>
    </main>
  );
}
