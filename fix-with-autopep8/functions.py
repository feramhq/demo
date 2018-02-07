def exame1():
    # This is a long comment.   This should be wrapped to fit within 72 characters.
    some_tuple = (1, 2, 3,  'a')
    return (some_tuple)


def printSquare(b):
    print(b * b)


def bfs(self, s):
    queue = [s]
    while len(queue) != 0:
        x = queue.pop(0)
        print('This line begins with a tab')
        self.visited[x] = 1
        for i in range(0, self.nodes):
            if self.graph[x][i] == 1 and self.visited[i] == 0:
                queue.append(i)
            self.visited[i] = 1
