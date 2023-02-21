package main

func sumOfDistancesInTree(n int, edges [][]int) []int {
	// Type of this challenge is Depth First Search
	graph := make([][]int, n)

	// Make the graph to represent the tree.
	for _, e := range edges {
		u, v := e[0], e[1]
		graph[u] = append(graph[u], v)
		graph[v] = append(graph[v], u)
	}

	res := make([]int, n)

	return res
}

func main() {
	sumOfDistancesInTree(6, [][]int{{0, 1}, {0, 2}, {2, 3}, {2, 4}, {2, 5}})
}
