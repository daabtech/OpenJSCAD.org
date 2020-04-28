const test = require('ava')

const geom3 = require('../geometry/geom3')

const {ellipsoid} = require('./index')

const comparePolygonsAsPoints = require('../../test/helpers/comparePolygonsAsPoints')

test('ellipsoid (defaults)', t => {
  const obs = ellipsoid()
  const pts = geom3.toPoints(obs)
  const exp = [
    [[1, 0, 0], [0.8660253882408142, -0.5, 0], [0.75, -0.4330126941204071, -0.5], [0.8660253882408142, 0, -0.5] ],
    [[0.8660253882408142, 0, 0.5], [0.75, -0.4330126941204071, 0.5], [0.8660253882408142, -0.5, 0], [1, 0, 0] ],
    [[0.8660253882408142, 0, -0.5], [0.75, -0.4330126941204071, -0.5], [0.4330126941204071, -0.25, -0.8660253882408142], [0.5, 0, -0.8660253882408142] ],
    [[0.5, 0, 0.8660253882408142], [0.4330126941204071, -0.25, 0.8660253882408142], [0.75, -0.4330126941204071, 0.5], [0.8660253882408142, 0, 0.5] ],
    [[0.5, 0, -0.8660253882408142], [0.4330126941204071, -0.25, -0.8660253882408142], [6.123234262925839e-17, 0, -1] ],
    [[6.123234262925839e-17, 0, 1], [0.4330126941204071, -0.25, 0.8660253882408142], [0.5, 0, 0.8660253882408142] ],
    [[0.8660253882408142, -0.5, 0], [0.5, -0.8660253882408142, 0], [0.4330126941204071, -0.75, -0.5], [0.75, -0.4330126941204071, -0.5] ],
    [[0.75, -0.4330126941204071, 0.5], [0.4330126941204071, -0.75, 0.5], [0.5, -0.8660253882408142, 0], [0.8660253882408142, -0.5, 0] ],
    [[0.75, -0.4330126941204071, -0.5], [0.4330126941204071, -0.75, -0.5], [0.25, -0.4330126941204071, -0.8660253882408142], [0.4330126941204071, -0.25, -0.8660253882408142] ],
    [[0.4330126941204071, -0.25, 0.8660253882408142], [0.25, -0.4330126941204071, 0.8660253882408142], [0.4330126941204071, -0.75, 0.5], [0.75, -0.4330126941204071, 0.5] ],
    [[0.4330126941204071, -0.25, -0.8660253882408142], [0.25, -0.4330126941204071, -0.8660253882408142], [5.302876236065149e-17, -3.0616171314629196e-17, -1] ],
    [[5.302876236065149e-17, -3.0616171314629196e-17, 1], [0.25, -0.4330126941204071, 0.8660253882408142], [0.4330126941204071, -0.25, 0.8660253882408142] ],
    [[0.5, -0.8660253882408142, 0], [6.123234262925839e-17, -1, 0], [5.302876566937394e-17, -0.8660253882408142, -0.5], [0.4330126941204071, -0.75, -0.5] ],
    [[0.4330126941204071, -0.75, 0.5], [5.302876566937394e-17, -0.8660253882408142, 0.5], [6.123234262925839e-17, -1, 0], [0.5, -0.8660253882408142, 0] ],
    [[0.4330126941204071, -0.75, -0.5], [5.302876566937394e-17, -0.8660253882408142, -0.5], [3.0616171314629196e-17, -0.5, -0.8660253882408142], [0.25, -0.4330126941204071, -0.8660253882408142] ],
    [[0.25, -0.4330126941204071, 0.8660253882408142], [3.0616171314629196e-17, -0.5, 0.8660253882408142], [5.302876566937394e-17, -0.8660253882408142, 0.5], [0.4330126941204071, -0.75, 0.5] ],
    [[0.25, -0.4330126941204071, -0.8660253882408142], [3.0616171314629196e-17, -0.5, -0.8660253882408142], [3.0616171314629196e-17, -5.302876236065149e-17, -1] ],
    [[3.0616171314629196e-17, -5.302876236065149e-17, 1], [3.0616171314629196e-17, -0.5, 0.8660253882408142], [0.25, -0.4330126941204071, 0.8660253882408142] ],
    [[6.123234262925839e-17, -1, 0], [-0.5, -0.8660253882408142, 0], [-0.4330126941204071, -0.75, -0.5], [5.302876566937394e-17, -0.8660253882408142, -0.5] ],
    [[5.302876566937394e-17, -0.8660253882408142, 0.5], [-0.4330126941204071, -0.75, 0.5], [-0.5, -0.8660253882408142, 0], [6.123234262925839e-17, -1, 0] ],
    [[5.302876566937394e-17, -0.8660253882408142, -0.5], [-0.4330126941204071, -0.75, -0.5], [-0.25, -0.4330126941204071, -0.8660253882408142], [3.0616171314629196e-17, -0.5, -0.8660253882408142] ],
    [[3.0616171314629196e-17, -0.5, 0.8660253882408142], [-0.25, -0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, -0.75, 0.5], [5.302876566937394e-17, -0.8660253882408142, 0.5] ],
    [[3.0616171314629196e-17, -0.5, -0.8660253882408142], [-0.25, -0.4330126941204071, -0.8660253882408142], [3.74939976039497e-33, -6.123234262925839e-17, -1] ],
    [[3.74939976039497e-33, -6.123234262925839e-17, 1], [-0.25, -0.4330126941204071, 0.8660253882408142], [3.0616171314629196e-17, -0.5, 0.8660253882408142] ],
    [[-0.5, -0.8660253882408142, 0], [-0.8660253882408142, -0.5, 0], [-0.75, -0.4330126941204071, -0.5], [-0.4330126941204071, -0.75, -0.5] ],
    [[-0.4330126941204071, -0.75, 0.5], [-0.75, -0.4330126941204071, 0.5], [-0.8660253882408142, -0.5, 0], [-0.5, -0.8660253882408142, 0] ],
    [[-0.4330126941204071, -0.75, -0.5], [-0.75, -0.4330126941204071, -0.5], [-0.4330126941204071, -0.25, -0.8660253882408142], [-0.25, -0.4330126941204071, -0.8660253882408142] ],
    [[-0.25, -0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, -0.25, 0.8660253882408142], [-0.75, -0.4330126941204071, 0.5], [-0.4330126941204071, -0.75, 0.5] ],
    [[-0.25, -0.4330126941204071, -0.8660253882408142], [-0.4330126941204071, -0.25, -0.8660253882408142], [-3.0616171314629196e-17, -5.302876236065149e-17, -1] ],
    [[-3.0616171314629196e-17, -5.302876236065149e-17, 1], [-0.4330126941204071, -0.25, 0.8660253882408142], [-0.25, -0.4330126941204071, 0.8660253882408142] ],
    [[-0.8660253882408142, -0.5, 0], [-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.75, -0.4330126941204071, -0.5] ],
    [[-0.75, -0.4330126941204071, 0.5], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, -0.5, 0] ],
    [[-0.75, -0.4330126941204071, -0.5], [-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.5, -6.123234262925839e-17, -0.8660253882408142], [-0.4330126941204071, -0.25, -0.8660253882408142] ],
    [[-0.4330126941204071, -0.25, 0.8660253882408142], [-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-0.75, -0.4330126941204071, 0.5] ],
    [[-0.4330126941204071, -0.25, -0.8660253882408142], [-0.5, -6.123234262925839e-17, -0.8660253882408142], [-5.302876236065149e-17, -3.0616171314629196e-17, -1] ],
    [[-5.302876236065149e-17, -3.0616171314629196e-17, 1], [-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.4330126941204071, -0.25, 0.8660253882408142] ],
    [[-1, -1.2246468525851679e-16, 0], [-0.8660253882408142, 0.5, 0], [-0.75, 0.4330126941204071, -0.5], [-0.8660253882408142, -1.0605753133874788e-16, -0.5] ],
    [[-0.8660253882408142, -1.0605753133874788e-16, 0.5], [-0.75, 0.4330126941204071, 0.5], [-0.8660253882408142, 0.5, 0], [-1, -1.2246468525851679e-16, 0] ],
    [[-0.8660253882408142, -1.0605753133874788e-16, -0.5], [-0.75, 0.4330126941204071, -0.5], [-0.4330126941204071, 0.25, -0.8660253882408142], [-0.5, -6.123234262925839e-17, -0.8660253882408142] ],
    [[-0.5, -6.123234262925839e-17, 0.8660253882408142], [-0.4330126941204071, 0.25, 0.8660253882408142], [-0.75, 0.4330126941204071, 0.5], [-0.8660253882408142, -1.0605753133874788e-16, 0.5] ],
    [[-0.5, -6.123234262925839e-17, -0.8660253882408142], [-0.4330126941204071, 0.25, -0.8660253882408142], [-6.123234262925839e-17, -7.49879952078994e-33, -1] ],
    [[-6.123234262925839e-17, -7.49879952078994e-33, 1], [-0.4330126941204071, 0.25, 0.8660253882408142], [-0.5, -6.123234262925839e-17, 0.8660253882408142] ],
    [[-0.8660253882408142, 0.5, 0], [-0.5, 0.8660253882408142, 0], [-0.4330126941204071, 0.75, -0.5], [-0.75, 0.4330126941204071, -0.5] ],
    [[-0.75, 0.4330126941204071, 0.5], [-0.4330126941204071, 0.75, 0.5], [-0.5, 0.8660253882408142, 0], [-0.8660253882408142, 0.5, 0] ],
    [[-0.75, 0.4330126941204071, -0.5], [-0.4330126941204071, 0.75, -0.5], [-0.25, 0.4330126941204071, -0.8660253882408142], [-0.4330126941204071, 0.25, -0.8660253882408142] ],
    [[-0.4330126941204071, 0.25, 0.8660253882408142], [-0.25, 0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, 0.75, 0.5], [-0.75, 0.4330126941204071, 0.5] ],
    [[-0.4330126941204071, 0.25, -0.8660253882408142], [-0.25, 0.4330126941204071, -0.8660253882408142], [-5.302876236065149e-17, 3.0616171314629196e-17, -1] ],
    [[-5.302876236065149e-17, 3.0616171314629196e-17, 1], [-0.25, 0.4330126941204071, 0.8660253882408142], [-0.4330126941204071, 0.25, 0.8660253882408142] ],
    [[-0.5, 0.8660253882408142, 0], [-1.8369701465288538e-16, 1, 0], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], [-0.4330126941204071, 0.75, -0.5] ],
    [[-0.4330126941204071, 0.75, 0.5], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], [-1.8369701465288538e-16, 1, 0], [-0.5, 0.8660253882408142, 0] ],
    [[-0.4330126941204071, 0.75, -0.5], [-1.5908628708195447e-16, 0.8660253882408142, -0.5], [-9.184850732644269e-17, 0.5, -0.8660253882408142], [-0.25, 0.4330126941204071, -0.8660253882408142] ],
    [[-0.25, 0.4330126941204071, 0.8660253882408142], [-9.184850732644269e-17, 0.5, 0.8660253882408142], [-1.5908628708195447e-16, 0.8660253882408142, 0.5], [-0.4330126941204071, 0.75, 0.5] ],
    [[-0.25, 0.4330126941204071, -0.8660253882408142], [-9.184850732644269e-17, 0.5, -0.8660253882408142], [-3.0616171314629196e-17, 5.302876236065149e-17, -1] ],
    [[-3.0616171314629196e-17, 5.302876236065149e-17, 1], [-9.184850732644269e-17, 0.5, 0.8660253882408142], [-0.25, 0.4330126941204071, 0.8660253882408142] ],
    [[-1.8369701465288538e-16, 1, 0], [0.5, 0.8660253882408142, 0], [0.4330126941204071, 0.75, -0.5], [-1.5908628708195447e-16, 0.8660253882408142, -0.5] ],
    [[-1.5908628708195447e-16, 0.8660253882408142, 0.5], [0.4330126941204071, 0.75, 0.5], [0.5, 0.8660253882408142, 0], [-1.8369701465288538e-16, 1, 0] ],
    [[-1.5908628708195447e-16, 0.8660253882408142, -0.5], [0.4330126941204071, 0.75, -0.5], [0.25, 0.4330126941204071, -0.8660253882408142], [-9.184850732644269e-17, 0.5, -0.8660253882408142] ],
    [[-9.184850732644269e-17, 0.5, 0.8660253882408142], [0.25, 0.4330126941204071, 0.8660253882408142], [0.4330126941204071, 0.75, 0.5], [-1.5908628708195447e-16, 0.8660253882408142, 0.5] ],
    [[-9.184850732644269e-17, 0.5, -0.8660253882408142], [0.25, 0.4330126941204071, -0.8660253882408142], [-1.1248198179158957e-32, 6.123234262925839e-17, -1] ],
    [[-1.1248198179158957e-32, 6.123234262925839e-17, 1], [0.25, 0.4330126941204071, 0.8660253882408142], [-9.184850732644269e-17, 0.5, 0.8660253882408142] ],
    [[0.5, 0.8660253882408142, 0], [0.8660253882408142, 0.5, 0], [0.75, 0.4330126941204071, -0.5], [0.4330126941204071, 0.75, -0.5] ],
    [[0.4330126941204071, 0.75, 0.5], [0.75, 0.4330126941204071, 0.5], [0.8660253882408142, 0.5, 0], [0.5, 0.8660253882408142, 0] ],
    [[0.4330126941204071, 0.75, -0.5], [0.75, 0.4330126941204071, -0.5], [0.4330126941204071, 0.25, -0.8660253882408142], [0.25, 0.4330126941204071, -0.8660253882408142] ],
    [[0.25, 0.4330126941204071, 0.8660253882408142], [0.4330126941204071, 0.25, 0.8660253882408142], [0.75, 0.4330126941204071, 0.5], [0.4330126941204071, 0.75, 0.5] ],
    [[0.25, 0.4330126941204071, -0.8660253882408142], [0.4330126941204071, 0.25, -0.8660253882408142], [3.0616171314629196e-17, 5.302876236065149e-17, -1] ],
    [[3.0616171314629196e-17, 5.302876236065149e-17, 1], [0.4330126941204071, 0.25, 0.8660253882408142], [0.25, 0.4330126941204071, 0.8660253882408142] ],
    [[0.8660253882408142, 0.5, 0], [1, 2.4492937051703357e-16, 0], [0.8660253882408142, 2.1211506267749576e-16, -0.5], [0.75, 0.4330126941204071, -0.5] ],
    [[0.75, 0.4330126941204071, 0.5], [0.8660253882408142, 2.1211506267749576e-16, 0.5], [1, 2.4492937051703357e-16, 0], [0.8660253882408142, 0.5, 0] ],
    [[0.75, 0.4330126941204071, -0.5], [0.8660253882408142, 2.1211506267749576e-16, -0.5], [0.5, 1.2246468525851679e-16, -0.8660253882408142], [0.4330126941204071, 0.25, -0.8660253882408142] ],
    [[0.4330126941204071, 0.25, 0.8660253882408142], [0.5, 1.2246468525851679e-16, 0.8660253882408142], [0.8660253882408142, 2.1211506267749576e-16, 0.5], [0.75, 0.4330126941204071, 0.5] ],
    [[0.4330126941204071, 0.25, -0.8660253882408142], [0.5, 1.2246468525851679e-16, -0.8660253882408142], [5.302876236065149e-17, 3.0616171314629196e-17, -1] ],
    [[5.302876236065149e-17, 3.0616171314629196e-17, 1], [0.5, 1.2246468525851679e-16, 0.8660253882408142], [0.4330126941204071, 0.25, 0.8660253882408142] ]
  ]
  t.is(pts.length, 72)
  t.true(comparePolygonsAsPoints(pts, exp))
})

test('ellipsoid (options)', t => {
  // test radius
  let obs = ellipsoid({radius: [3, 5, 7]})
  let pts = geom3.toPoints(obs)
  let exp = [
    [ [ 3, 0, 0 ],
      [ 2.598076105117798, -2.5, 0 ],
      [ 2.25, -2.1650636196136475, -3.5 ],
      [ 2.598076105117798, 0, -3.5 ] ],
    [ [ 2.598076105117798, 0, 3.5 ],
      [ 2.25, -2.1650636196136475, 3.5 ],
      [ 2.598076105117798, -2.5, 0 ],
      [ 3, 0, 0 ] ],
    [ [ 2.598076105117798, 0, -3.5 ],
      [ 2.25, -2.1650636196136475, -3.5 ],
      [ 1.299038052558899, -1.25, -6.062177658081055 ],
      [ 1.5, 0, -6.062177658081055 ] ],
    [ [ 1.5, 0, 6.062177658081055 ],
      [ 1.299038052558899, -1.25, 6.062177658081055 ],
      [ 2.25, -2.1650636196136475, 3.5 ],
      [ 2.598076105117798, 0, 3.5 ] ],
    [ [ 1.5, 0, -6.062177658081055 ],
      [ 1.299038052558899, -1.25, -6.062177658081055 ],
      [ 1.8369701465288538e-16, 0, -7 ] ],
    [ [ 1.8369701465288538e-16, 0, 7 ],
      [ 1.299038052558899, -1.25, 6.062177658081055 ],
      [ 1.5, 0, 6.062177658081055 ] ],
    [ [ 2.598076105117798, -2.5, 0 ],
      [ 1.5, -4.330127239227295, 0 ],
      [ 1.299038052558899, -3.750000238418579, -3.5 ],
      [ 2.25, -2.1650636196136475, -3.5 ] ],
    [ [ 2.25, -2.1650636196136475, 3.5 ],
      [ 1.299038052558899, -3.750000238418579, 3.5 ],
      [ 1.5, -4.330127239227295, 0 ],
      [ 2.598076105117798, -2.5, 0 ] ],
    [ [ 2.25, -2.1650636196136475, -3.5 ],
      [ 1.299038052558899, -3.750000238418579, -3.5 ],
      [ 0.75, -2.1650636196136475, -6.062177658081055 ],
      [ 1.299038052558899, -1.25, -6.062177658081055 ] ],
    [ [ 1.299038052558899, -1.25, 6.062177658081055 ],
      [ 0.75, -2.1650636196136475, 6.062177658081055 ],
      [ 1.299038052558899, -3.750000238418579, 3.5 ],
      [ 2.25, -2.1650636196136475, 3.5 ] ],
    [ [ 1.299038052558899, -1.25, -6.062177658081055 ],
      [ 0.75, -2.1650636196136475, -6.062177658081055 ],
      [ 1.5908627384706467e-16, -1.5308084995570108e-16, -7 ] ],
    [ [ 1.5908627384706467e-16, -1.5308084995570108e-16, 7 ],
      [ 0.75, -2.1650636196136475, 6.062177658081055 ],
      [ 1.299038052558899, -1.25, 6.062177658081055 ] ],
    [ [ 1.5, -4.330127239227295, 0 ],
      [ 1.8369701465288538e-16, -5, 0 ],
      [ 1.5908628708195447e-16, -4.330127239227295, -3.5 ],
      [ 1.299038052558899, -3.750000238418579, -3.5 ] ],
    [ [ 1.299038052558899, -3.750000238418579, 3.5 ],
      [ 1.5908628708195447e-16, -4.330127239227295, 3.5 ],
      [ 1.8369701465288538e-16, -5, 0 ],
      [ 1.5, -4.330127239227295, 0 ] ],
    [ [ 1.299038052558899, -3.750000238418579, -3.5 ],
      [ 1.5908628708195447e-16, -4.330127239227295, -3.5 ],
      [ 9.184850732644269e-17, -2.5, -6.062177658081055 ],
      [ 0.75, -2.1650636196136475, -6.062177658081055 ] ],
    [ [ 0.75, -2.1650636196136475, 6.062177658081055 ],
      [ 9.184850732644269e-17, -2.5, 6.062177658081055 ],
      [ 1.5908628708195447e-16, -4.330127239227295, 3.5 ],
      [ 1.299038052558899, -3.750000238418579, 3.5 ] ],
    [ [ 0.75, -2.1650636196136475, -6.062177658081055 ],
      [ 9.184850732644269e-17, -2.5, -6.062177658081055 ],
      [ 9.184850732644269e-17, -2.6514381180325745e-16, -7 ] ],
    [ [ 9.184850732644269e-17, -2.6514381180325745e-16, 7 ],
      [ 9.184850732644269e-17, -2.5, 6.062177658081055 ],
      [ 0.75, -2.1650636196136475, 6.062177658081055 ] ],
    [ [ 1.8369701465288538e-16, -5, 0 ],
      [ -1.5, -4.330127239227295, 0 ],
      [ -1.299038052558899, -3.750000238418579, -3.5 ],
      [ 1.5908628708195447e-16, -4.330127239227295, -3.5 ] ],
    [ [ 1.5908628708195447e-16, -4.330127239227295, 3.5 ],
      [ -1.299038052558899, -3.750000238418579, 3.5 ],
      [ -1.5, -4.330127239227295, 0 ],
      [ 1.8369701465288538e-16, -5, 0 ] ],
    [ [ 1.5908628708195447e-16, -4.330127239227295, -3.5 ],
      [ -1.299038052558899, -3.750000238418579, -3.5 ],
      [ -0.75, -2.1650636196136475, -6.062177658081055 ],
      [ 9.184850732644269e-17, -2.5, -6.062177658081055 ] ],
    [ [ 9.184850732644269e-17, -2.5, 6.062177658081055 ],
      [ -0.75, -2.1650636196136475, 6.062177658081055 ],
      [ -1.299038052558899, -3.750000238418579, 3.5 ],
      [ 1.5908628708195447e-16, -4.330127239227295, 3.5 ] ],
    [ [ 9.184850732644269e-17, -2.5, -6.062177658081055 ],
      [ -0.75, -2.1650636196136475, -6.062177658081055 ],
      [ 1.1248198179158957e-32, -3.0616169991140216e-16, -7 ] ],
    [ [ 1.1248198179158957e-32, -3.0616169991140216e-16, 7 ],
      [ -0.75, -2.1650636196136475, 6.062177658081055 ],
      [ 9.184850732644269e-17, -2.5, 6.062177658081055 ] ],
    [ [ -1.5, -4.330127239227295, 0 ],
      [ -2.598076105117798, -2.5, 0 ],
      [ -2.25, -2.1650636196136475, -3.5 ],
      [ -1.299038052558899, -3.750000238418579, -3.5 ] ],
    [ [ -1.299038052558899, -3.750000238418579, 3.5 ],
      [ -2.25, -2.1650636196136475, 3.5 ],
      [ -2.598076105117798, -2.5, 0 ],
      [ -1.5, -4.330127239227295, 0 ] ],
    [ [ -1.299038052558899, -3.750000238418579, -3.5 ],
      [ -2.25, -2.1650636196136475, -3.5 ],
      [ -1.299038052558899, -1.25, -6.062177658081055 ],
      [ -0.75, -2.1650636196136475, -6.062177658081055 ] ],
    [ [ -0.75, -2.1650636196136475, 6.062177658081055 ],
      [ -1.299038052558899, -1.25, 6.062177658081055 ],
      [ -2.25, -2.1650636196136475, 3.5 ],
      [ -1.299038052558899, -3.750000238418579, 3.5 ] ],
    [ [ -0.75, -2.1650636196136475, -6.062177658081055 ],
      [ -1.299038052558899, -1.25, -6.062177658081055 ],
      [ -9.184850732644269e-17, -2.6514381180325745e-16, -7 ] ],
    [ [ -9.184850732644269e-17, -2.6514381180325745e-16, 7 ],
      [ -1.299038052558899, -1.25, 6.062177658081055 ],
      [ -0.75, -2.1650636196136475, 6.062177658081055 ] ],
    [ [ -2.598076105117798, -2.5, 0 ],
      [ -3, -6.123233998228043e-16, 0 ],
      [ -2.598076105117798, -5.302876236065149e-16, -3.5 ],
      [ -2.25, -2.1650636196136475, -3.5 ] ],
    [ [ -2.25, -2.1650636196136475, 3.5 ],
      [ -2.598076105117798, -5.302876236065149e-16, 3.5 ],
      [ -3, -6.123233998228043e-16, 0 ],
      [ -2.598076105117798, -2.5, 0 ] ],
    [ [ -2.25, -2.1650636196136475, -3.5 ],
      [ -2.598076105117798, -5.302876236065149e-16, -3.5 ],
      [ -1.5, -3.0616169991140216e-16, -6.062177658081055 ],
      [ -1.299038052558899, -1.25, -6.062177658081055 ] ],
    [ [ -1.299038052558899, -1.25, 6.062177658081055 ],
      [ -1.5, -3.0616169991140216e-16, 6.062177658081055 ],
      [ -2.598076105117798, -5.302876236065149e-16, 3.5 ],
      [ -2.25, -2.1650636196136475, 3.5 ] ],
    [ [ -1.299038052558899, -1.25, -6.062177658081055 ],
      [ -1.5, -3.0616169991140216e-16, -6.062177658081055 ],
      [ -1.5908627384706467e-16, -1.5308084995570108e-16, -7 ] ],
    [ [ -1.5908627384706467e-16, -1.5308084995570108e-16, 7 ],
      [ -1.5, -3.0616169991140216e-16, 6.062177658081055 ],
      [ -1.299038052558899, -1.25, 6.062177658081055 ] ],
    [ [ -3, -6.123233998228043e-16, 0 ],
      [ -2.598076105117798, 2.5, 0 ],
      [ -2.25, 2.1650636196136475, -3.5 ],
      [ -2.598076105117798, -5.302876236065149e-16, -3.5 ] ],
    [ [ -2.598076105117798, -5.302876236065149e-16, 3.5 ],
      [ -2.25, 2.1650636196136475, 3.5 ],
      [ -2.598076105117798, 2.5, 0 ],
      [ -3, -6.123233998228043e-16, 0 ] ],
    [ [ -2.598076105117798, -5.302876236065149e-16, -3.5 ],
      [ -2.25, 2.1650636196136475, -3.5 ],
      [ -1.299038052558899, 1.25, -6.062177658081055 ],
      [ -1.5, -3.0616169991140216e-16, -6.062177658081055 ] ],
    [ [ -1.5, -3.0616169991140216e-16, 6.062177658081055 ],
      [ -1.299038052558899, 1.25, 6.062177658081055 ],
      [ -2.25, 2.1650636196136475, 3.5 ],
      [ -2.598076105117798, -5.302876236065149e-16, 3.5 ] ],
    [ [ -1.5, -3.0616169991140216e-16, -6.062177658081055 ],
      [ -1.299038052558899, 1.25, -6.062177658081055 ],
      [ -1.8369701465288538e-16, -3.7493993930529855e-32, -7 ] ],
    [ [ -1.8369701465288538e-16, -3.7493993930529855e-32, 7 ],
      [ -1.299038052558899, 1.25, 6.062177658081055 ],
      [ -1.5, -3.0616169991140216e-16, 6.062177658081055 ] ],
    [ [ -2.598076105117798, 2.5, 0 ],
      [ -1.5, 4.330127239227295, 0 ],
      [ -1.299038052558899, 3.750000238418579, -3.5 ],
      [ -2.25, 2.1650636196136475, -3.5 ] ],
    [ [ -2.25, 2.1650636196136475, 3.5 ],
      [ -1.299038052558899, 3.750000238418579, 3.5 ],
      [ -1.5, 4.330127239227295, 0 ],
      [ -2.598076105117798, 2.5, 0 ] ],
    [ [ -2.25, 2.1650636196136475, -3.5 ],
      [ -1.299038052558899, 3.750000238418579, -3.5 ],
      [ -0.75, 2.1650636196136475, -6.062177658081055 ],
      [ -1.299038052558899, 1.25, -6.062177658081055 ] ],
    [ [ -1.299038052558899, 1.25, 6.062177658081055 ],
      [ -0.75, 2.1650636196136475, 6.062177658081055 ],
      [ -1.299038052558899, 3.750000238418579, 3.5 ],
      [ -2.25, 2.1650636196136475, 3.5 ] ],
    [ [ -1.299038052558899, 1.25, -6.062177658081055 ],
      [ -0.75, 2.1650636196136475, -6.062177658081055 ],
      [ -1.5908627384706467e-16, 1.5308084995570108e-16, -7 ] ],
    [ [ -1.5908627384706467e-16, 1.5308084995570108e-16, 7 ],
      [ -0.75, 2.1650636196136475, 6.062177658081055 ],
      [ -1.299038052558899, 1.25, 6.062177658081055 ] ],
    [ [ -1.5, 4.330127239227295, 0 ],
      [ -5.510910704284357e-16, 5, 0 ],
      [ -4.772588612458634e-16, 4.330127239227295, -3.5 ],
      [ -1.299038052558899, 3.750000238418579, -3.5 ] ],
    [ [ -1.299038052558899, 3.750000238418579, 3.5 ],
      [ -4.772588612458634e-16, 4.330127239227295, 3.5 ],
      [ -5.510910704284357e-16, 5, 0 ],
      [ -1.5, 4.330127239227295, 0 ] ],
    [ [ -1.299038052558899, 3.750000238418579, -3.5 ],
      [ -4.772588612458634e-16, 4.330127239227295, -3.5 ],
      [ -2.7554553521421787e-16, 2.5, -6.062177658081055 ],
      [ -0.75, 2.1650636196136475, -6.062177658081055 ] ],
    [ [ -0.75, 2.1650636196136475, 6.062177658081055 ],
      [ -2.7554553521421787e-16, 2.5, 6.062177658081055 ],
      [ -4.772588612458634e-16, 4.330127239227295, 3.5 ],
      [ -1.299038052558899, 3.750000238418579, 3.5 ] ],
    [ [ -0.75, 2.1650636196136475, -6.062177658081055 ],
      [ -2.7554553521421787e-16, 2.5, -6.062177658081055 ],
      [ -9.184850732644269e-17, 2.6514381180325745e-16, -7 ] ],
    [ [ -9.184850732644269e-17, 2.6514381180325745e-16, 7 ],
      [ -2.7554553521421787e-16, 2.5, 6.062177658081055 ],
      [ -0.75, 2.1650636196136475, 6.062177658081055 ] ],
    [ [ -5.510910704284357e-16, 5, 0 ],
      [ 1.5, 4.330127239227295, 0 ],
      [ 1.299038052558899, 3.750000238418579, -3.5 ],
      [ -4.772588612458634e-16, 4.330127239227295, -3.5 ] ],
    [ [ -4.772588612458634e-16, 4.330127239227295, 3.5 ],
      [ 1.299038052558899, 3.750000238418579, 3.5 ],
      [ 1.5, 4.330127239227295, 0 ],
      [ -5.510910704284357e-16, 5, 0 ] ],
    [ [ -4.772588612458634e-16, 4.330127239227295, -3.5 ],
      [ 1.299038052558899, 3.750000238418579, -3.5 ],
      [ 0.75, 2.1650636196136475, -6.062177658081055 ],
      [ -2.7554553521421787e-16, 2.5, -6.062177658081055 ] ],
    [ [ -2.7554553521421787e-16, 2.5, 6.062177658081055 ],
      [ 0.75, 2.1650636196136475, 6.062177658081055 ],
      [ 1.299038052558899, 3.750000238418579, 3.5 ],
      [ -4.772588612458634e-16, 4.330127239227295, 3.5 ] ],
    [ [ -2.7554553521421787e-16, 2.5, -6.062177658081055 ],
      [ 0.75, 2.1650636196136475, -6.062177658081055 ],
      [ -3.374459600684481e-32, 3.0616169991140216e-16, -7 ] ],
    [ [ -3.374459600684481e-32, 3.0616169991140216e-16, 7 ],
      [ 0.75, 2.1650636196136475, 6.062177658081055 ],
      [ -2.7554553521421787e-16, 2.5, 6.062177658081055 ] ],
    [ [ 1.5, 4.330127239227295, 0 ],
      [ 2.598076105117798, 2.5, 0 ],
      [ 2.25, 2.1650636196136475, -3.5 ],
      [ 1.299038052558899, 3.750000238418579, -3.5 ] ],
    [ [ 1.299038052558899, 3.750000238418579, 3.5 ],
      [ 2.25, 2.1650636196136475, 3.5 ],
      [ 2.598076105117798, 2.5, 0 ],
      [ 1.5, 4.330127239227295, 0 ] ],
    [ [ 1.299038052558899, 3.750000238418579, -3.5 ],
      [ 2.25, 2.1650636196136475, -3.5 ],
      [ 1.299038052558899, 1.25, -6.062177658081055 ],
      [ 0.75, 2.1650636196136475, -6.062177658081055 ] ],
    [ [ 0.75, 2.1650636196136475, 6.062177658081055 ],
      [ 1.299038052558899, 1.25, 6.062177658081055 ],
      [ 2.25, 2.1650636196136475, 3.5 ],
      [ 1.299038052558899, 3.750000238418579, 3.5 ] ],
    [ [ 0.75, 2.1650636196136475, -6.062177658081055 ],
      [ 1.299038052558899, 1.25, -6.062177658081055 ],
      [ 9.184850732644269e-17, 2.6514381180325745e-16, -7 ] ],
    [ [ 9.184850732644269e-17, 2.6514381180325745e-16, 7 ],
      [ 1.299038052558899, 1.25, 6.062177658081055 ],
      [ 0.75, 2.1650636196136475, 6.062177658081055 ] ],
    [ [ 2.598076105117798, 2.5, 0 ],
      [ 3, 1.2246467996456087e-15, 0 ],
      [ 2.598076105117798, 1.0605752472130298e-15, -3.5 ],
      [ 2.25, 2.1650636196136475, -3.5 ] ],
    [ [ 2.25, 2.1650636196136475, 3.5 ],
      [ 2.598076105117798, 1.0605752472130298e-15, 3.5 ],
      [ 3, 1.2246467996456087e-15, 0 ],
      [ 2.598076105117798, 2.5, 0 ] ],
    [ [ 2.25, 2.1650636196136475, -3.5 ],
      [ 2.598076105117798, 1.0605752472130298e-15, -3.5 ],
      [ 1.5, 6.123233998228043e-16, -6.062177658081055 ],
      [ 1.299038052558899, 1.25, -6.062177658081055 ] ],
    [ [ 1.299038052558899, 1.25, 6.062177658081055 ],
      [ 1.5, 6.123233998228043e-16, 6.062177658081055 ],
      [ 2.598076105117798, 1.0605752472130298e-15, 3.5 ],
      [ 2.25, 2.1650636196136475, 3.5 ] ],
    [ [ 1.299038052558899, 1.25, -6.062177658081055 ],
      [ 1.5, 6.123233998228043e-16, -6.062177658081055 ],
      [ 1.5908627384706467e-16, 1.5308084995570108e-16, -7 ] ],
    [ [ 1.5908627384706467e-16, 1.5308084995570108e-16, 7 ],
      [ 1.5, 6.123233998228043e-16, 6.062177658081055 ],
      [ 1.299038052558899, 1.25, 6.062177658081055 ] ]
  ]
  t.is(pts.length, 72)
  t.true(comparePolygonsAsPoints(pts, exp))

  // test segments
  obs = ellipsoid({segments: 8})
  pts = geom3.toPoints(obs)
  exp = [
  ]
  t.is(pts.length, 32)
})