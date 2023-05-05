import React from 'react'
import Table from './Table'

function Tables() {
  return (
    <div className='flex flex-wrap gap-5 mx-auto mt-3 text-center items-center justify-center'>
        <Table tn={1} />
        <Table tn={2} />
        <Table tn={3} />
        <Table tn={4} />

        <Table tn={5} />
        <Table tn={6} />
        <Table tn={7} />
        <Table tn={8} />

        <Table tn={9} />
        <Table tn={10} />
        <Table tn={11} />
        <Table tn={12} />

        <Table tn={13} />
        <Table tn={14} />
    </div>
  )
}

export default Tables