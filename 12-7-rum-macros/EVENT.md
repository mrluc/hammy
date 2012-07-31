

Notes from 12-7 RUM
===

# Takeaway

the new IR/control graph/escape map are the right data structures
for the job.

The AST is too mixed together with behavior.


# Notes as I see them

IR - so AST is too syntaxy.

And IR is very sequential

  But it doesn't lose the info from the AST, it splits it into
  the IR and the Control Flow graph.


AST is, of course, different per-implementation.

IR comes, always, after AST generation.

And they run it in interpreter, and optimize as indicated ... 

Probably were doing that, but the IR 