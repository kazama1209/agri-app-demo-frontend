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
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function HomePage() {
  // 擬似データ（7日分）
  const data = [
    { day: '1日', temperture: 23.5, humidity: 65, light: 420, rootTemperture: 22.1, ph: 6.5, ec: 1.8, o2: 7.2 },
    { day: '2日', temperture: 24.2, humidity: 63, light: 460, rootTemperture: 22.4, ph: 6.4, ec: 1.9, o2: 7.0 },
    { day: '3日', temperture: 24.8, humidity: 60, light: 480, rootTemperture: 22.9, ph: 6.6, ec: 2.0, o2: 7.3 },
    { day: '4日', temperture: 25.0, humidity: 58, light: 510, rootTemperture: 23.0, ph: 6.5, ec: 2.1, o2: 7.5 },
    { day: '5日', temperture: 24.6, humidity: 61, light: 470, rootTemperture: 22.8, ph: 6.7, ec: 2.0, o2: 7.1 },
    { day: '6日', temperture: 23.9, humidity: 66, light: 430, rootTemperture: 22.2, ph: 6.6, ec: 1.8, o2: 7.4 },
    { day: '7日', temperture: 23.4, humidity: 68, light: 400, rootTemperture: 21.9, ph: 6.5, ec: 1.7, o2: 7.0 },
  ];

  // 養液組成比（円グラフ）
  const nutrientData = [
    { name: '窒素 (N)', value: 35 },
    { name: 'リン酸 (P)', value: 25 },
    { name: 'カリウム (K)', value: 30 },
    { name: '微量要素', value: 10 },
  ];

  const COLORS = ['#51cf66', '#74c0fc', '#ffd43b', '#ff922b'];

  return (
    <main style={{ padding: 24 }}>
      <Group justify="space-between" mb="md">
        <Title order={2}>ホーム</Title>
        <Button
          onClick={() =>
            notifications.show({
              message: '最新データを取得しました',
              color: 'teal',
            })
          }
        >
          最新データを取得
        </Button>
      </Group>

      {/* 概要カード */}
      <Grid mb="lg">
        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              平均温度
            </Text>
            <Title order={3}>24.2℃</Title>
            <Badge color="orange" variant="light">
              安定
            </Badge>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              平均湿度
            </Text>
            <Title order={3}>63%</Title>
            <Badge color="blue" variant="light">
              良好
            </Badge>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              平均pH
            </Text>
            <Title order={3}>6.5</Title>
            <Badge color="green" variant="light">
              最適
            </Badge>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
          <Card withBorder radius="md" shadow="sm" p="md">
            <Text size="sm" c="dimmed">
              平均EC
            </Text>
            <Title order={3}>1.9 mS/cm</Title>
            <Badge color="green" variant="light">
              良好
            </Badge>
          </Card>
        </Grid.Col>
      </Grid>

      {/* チャートセクション */}
      <Grid>
        {/* 温度・湿度 */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder shadow="sm" radius="md" p="md">
            <Title order={4} mb="xs">
              温度・湿度の推移
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temperture" stroke="#fa5252" name="温度 (℃)" />
                <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#339af0" name="湿度 (%)" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 日射量・根域温度 */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card withBorder shadow="sm" radius="md" p="md">
            <Title order={4} mb="xs">
              日射量・根域温度
            </Title>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="light" fill="#fab005" name="日射量 (W/m²)" />
                <Bar dataKey="rootTemperture" fill="#e8590c" name="根域温度 (℃)" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Grid.Col>

        {/* 養液組成比（円グラフ） */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            withBorder
            shadow="sm"
            radius="md"
            p="md"
            style={{ height: 350, display: 'flex', flexDirection: 'column' }}
          >
            <Title order={4} mb="xs">
              養液組成比
            </Title>
            <div style={{ flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nutrientData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {nutrientData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Grid.Col>

        {/* pH・EC・酸素濃度 */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card
            withBorder
            shadow="sm"
            radius="md"
            p="md"
            style={{ height: 350, display: 'flex', flexDirection: 'column' }}
          >
            <Title order={4} mb="xs">
              水質関連（pH / EC / 酸素濃度）
            </Title>
            <div style={{ flex: 1 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="ph" stroke="#40c057" name="pH" />
                  <Line type="monotone" dataKey="ec" stroke="#228be6" name="EC (mS/cm)" />
                  <Line type="monotone" dataKey="o2" stroke="#15aabf" name="酸素濃度 (mg/L)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Grid.Col>
      </Grid>
    </main>
  );
}
