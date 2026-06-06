import heapq

graph = {
    'A': [('B', 4), ('C', 1)],
    'B': [('D', 1)],
    'C': [('B', 2), ('D', 5)],
    'D': []
}

pq = [(0, 'A')]
dist = {'A': 0}

while pq:
    d, node = heapq.heappop(pq)

    for neigh, w in graph[node]:
        nd = d + w

        if neigh not in dist or nd < dist[neigh]:
            dist[neigh] = nd
            heapq.heappush(pq, (nd, neigh))

print("Shortest Distances from A:")
for node in dist:
    print(node, ":", dist[node])