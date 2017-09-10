print(
'This')
b = 'b'
print('a ' + b)


def bfs(self, s):
        queue = [s]
        while len(queue) != 0:
            x = queue.pop(0)
            print(x)
            self.visited[x] = 1
            for i in range(0, self.nodes):
                if self.graph[x][i] ==1 and self.visited[i] == 0:
                    queue.append(i)
         self.visited[i]=1
