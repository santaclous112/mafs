"use client"

import CodeAndExample from "components/CodeAndExample"
import Riemann from "guide-examples/examples/Riemann"
import RiemannSource from "!raw-loader!guide-examples/examples/Riemann.tsx"

function RiemannPage() {
  return (
    <>
      <p>
        This is one of the more complex examples. It draws Riemann partitions from point <em>a</em>{" "}
        to point <em>b</em>. While computing the partitions, their areas are summed up to show how
        the Riemann approximation compares to the true area under the given curve.
      </p>

      <p>
        In this example, some extra markup is used outside of Mafs to provide some inputs into the
        Mafs visualization. This is common, and recommended! Movable points are not the only way to
        provide inputs to Mafs.
      </p>

      <CodeAndExample source={RiemannSource} component={<Riemann />} />
    </>
  )
}

export default RiemannPage
